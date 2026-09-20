import Stripe from "stripe";

export function getStripe(){
  if(!process.env.STRIPE_SECRET_KEY)throw new Error("Stripe is not connected.");
  return new Stripe(process.env.STRIPE_SECRET_KEY);
}
