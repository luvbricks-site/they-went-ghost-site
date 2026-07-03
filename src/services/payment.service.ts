import Stripe from "stripe";

export async function processSuccessfulCheckout(
    session: Stripe.Checkout.Session
) {
    console.log("====================================");
    console.log("Processing successful checkout");
    console.log("Session:", session.id);
    console.log("====================================");
}