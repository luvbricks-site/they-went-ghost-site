import { processSuccessfulCheckout } from "@/services/payment.service";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
    const body = await req.text();

    const signature = req.headers.get("stripe-signature");

    if (!signature) {
        return NextResponse.json(
            { error: "Missing Stripe signature." },
            { status: 400 }
        );
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (err) {
        console.error("Webhook signature verification failed.", err);

        return NextResponse.json(
            { error: "Invalid webhook signature." },
            { status: 400 }
        );
    }

    console.log("✅ Stripe Event:", event.type);

    switch (event.type) {
        case "checkout.session.completed":
    console.log("💰 Payment Successful!");

    await processSuccessfulCheckout(
        event.data.object as Stripe.Checkout.Session
    );

    break;

        default:
            console.log("Unhandled event:", event.type);
    }

    return NextResponse.json({ received: true });
}