# Lust Kills storefront

Production foundation for a Memphis streetwear brand, built with Next.js 16 and React 19.

## Run locally

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and add the client's Stripe secret key. Keep Stripe in test mode until the client completes a full test order. In Stripe, enable Cards, Apple Pay, and Cash App Pay.

## Checkout

- Stripe hosted checkout: credit/debit cards, Apple Pay, and Cash App Pay when the customer and account are eligible.
- Server-side catalog validation prevents browser-edited prices, sizes, colors, or quantities.
- Shipping is $6.95 in the U.S. and free at $100+, matching the published shipping policy.

## Launch blockers

- Confirm garment material, fit, and stock counts with the client.
- Add the client's official support email when available; Instagram is the current customer-care channel.
- Connect the client's payment accounts, enable required methods, configure taxes, and confirm an order-fulfillment workflow.
- Connect the email provider and update the privacy policy before enabling signup.
- Review the generated legal drafts with a qualified professional.

Checkout code is complete but stays inactive until the client's payment credentials are added. Email signup remains disabled.
