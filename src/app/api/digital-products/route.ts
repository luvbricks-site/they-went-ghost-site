import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function formatPrice(cents: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(cents / 100);
}

export async function GET() {
  try {
    const products = await prisma.digitalProduct.findMany({
      where: {
        isActive: true,
      },
      orderBy: [
        {
          productType: "asc",
        },
        {
          title: "asc",
        },
      ],
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
        release: {
          select: {
            title: true,
            slug: true,
            releaseType: true,
            releaseDate: true,
            coverImagePath: true,
          },
        },
        track: {
          select: {
            title: true,
            slug: true,
            trackNumber: true,
            durationSeconds: true,
          },
        },
      },
    });

    return NextResponse.json({
      products: products.map((product) => ({
        id: product.id,
        productType: product.productType,
        title: product.title,
        slug: product.slug,
        description: product.description,
        priceCents: product.priceCents,
        priceDisplay: formatPrice(product.priceCents, product.currency),
        currency: product.currency,
        formats: [
          ...(product.allowMp3 ? ["MP3"] : []),
          ...(product.allowFlac ? ["FLAC"] : []),
        ],
        release: product.release,
        track: product.track,
      })),
    });
  } catch (error) {
    console.error("Failed to load digital products:", error);

    return NextResponse.json(
      {
        error: "Failed to load digital products.",
      },
      {
        status: 500,
      },
    );
  }
}