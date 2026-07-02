import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { createOrderNumber } from "@/lib/orderNumbers";
import { prisma } from "@/lib/prisma";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const checkoutSchema = z.object({
  productSlug: z.string().min(1),
  format: z.enum(["MP3", "FLAC"]),
  customerEmail: z.string().email().optional(),
});

function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

function isTaxEnabled() {
  return process.env.STRIPE_AUTOMATIC_TAX_ENABLED === "true";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = checkoutSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Invalid checkout request.",
          details: parsed.error.flatten(),
        },
        {
          status: 400,
        },
      );
    }

    const { productSlug, format, customerEmail } = parsed.data;

    const product = await prisma.digitalProduct.findUnique({
      where: {
        slug: productSlug,
      },
      select: {
        id: true,
        productType: true,
        title: true,
        slug: true,
        description: true,
        priceCents: true,
        currency: true,
        allowMp3: true,
        allowFlac: true,
        isActive: true,
        release: {
          select: {
            title: true,
            slug: true,
            releaseType: true,
          },
        },
        track: {
          select: {
            title: true,
            slug: true,
            trackNumber: true,
          },
        },
      },
    });

    if (!product || !product.isActive) {
      return NextResponse.json(
        {
          error: "Product is not available.",
        },
        {
          status: 404,
        },
      );
    }

    if (format === "MP3" && !product.allowMp3) {
      return NextResponse.json(
        {
          error: "MP3 is not available for this product.",
        },
        {
          status: 400,
        },
      );
    }

    if (format === "FLAC" && !product.allowFlac) {
      return NextResponse.json(
        {
          error: "FLAC is not available for this product.",
        },
        {
          status: 400,
        },
      );
    }

    const orderNumber = createOrderNumber();

    const order = await prisma.order.create({
      data: {
        orderNumber,
        orderType: "DIGITAL",
        status: "PENDING",
        paymentStatus: "UNPAID",
        customerEmail,
        currency: product.currency,
        subtotalCents: product.priceCents,
        discountCents: 0,
        shippingCents: 0,
        taxCents: 0,
        totalCents: product.priceCents,
        totalCostCents: 0,
        processorFeeCents: 0,
        netCents: product.priceCents,
        checkoutProvider: "STRIPE",
        items: {
          create: [
            {
              itemType: "DIGITAL",
              digitalProductId: product.id,
              titleSnapshot: product.title,
              formatSnapshot: format,
              quantity: 1,
              unitPriceCents: product.priceCents,
              unitCostCents: 0,
              discountCents: 0,
              taxCents: 0,
              lineTotalCents: product.priceCents,
              fulfillmentStatus: "NOT_REQUIRED",
            },
          ],
        },
      },
    });

    const stripe = getStripe();
    const siteUrl = getSiteUrl();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: customerEmail,
      billing_address_collection: "auto",
      automatic_tax: {
        enabled: isTaxEnabled(),
      },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: product.currency.toLowerCase(),
            unit_amount: product.priceCents,
            product_data: {
              name: `${product.title} (${format})`,
              description:
                product.description ??
                "Digital music download from They Went Ghost.",
              metadata: {
                productId: product.id,
                productSlug: product.slug,
                format,
              },
            },
          },
        },
      ],
      metadata: {
        orderId: order.id,
        orderNumber: order.orderNumber,
        productId: product.id,
        productSlug: product.slug,
        format,
      },
      success_url: `${siteUrl}/music-downloads/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/music-downloads?checkout=cancelled`,
    });

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        stripeCheckoutSessionId: session.id,
      },
    });

    return NextResponse.json({
      checkoutUrl: session.url,
      orderId: order.id,
      orderNumber: order.orderNumber,
    });
  } catch (error) {
    console.error("Stripe checkout failed:", error);

    return NextResponse.json(
      {
        error: "Stripe checkout failed.",
      },
      {
        status: 500,
      },
    );
  }
}