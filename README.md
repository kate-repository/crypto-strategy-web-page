# SatsOra TradingView Strategy Landing Page

Professional one-page sales landing page for SatsOra, a private invite-only BTC-first TradingView crypto strategy. The page positions the product as a weekly trend signal system while avoiding profit promises, fake results, and method disclosure.

## Tech Stack

- React
- Vite
- Regular CSS
- Static frontend only

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173/`.

## Build

```bash
npm run build
```

## Edit Placeholder Values

Replace payment, wallet, contact, and website placeholders in:

- `src/App.jsx` for Payhip links, email, wallet table values, page copy, pricing, and screenshot placeholder labels.
- `index.html` for SEO title, meta description, canonical URL, Open Graph tags, Twitter card tags, and JSON-LD structured data.
- `public/robots.txt` and `public/sitemap.xml` for the final website URL.

Current placeholders:

- `PAYHIP_MONTHLY_LINK_HERE`
- `PAYHIP_ANNUAL_LINK_HERE`
- `PAYHIP_LINK_HERE`
- `USDT_WALLET_ADDRESS_HERE`
- `USDC_WALLET_ADDRESS_HERE`
- `BTC_WALLET_ADDRESS_HERE`
- `WEBSITE_URL_HERE`

Contact email is set to `info@satsora.com`.

## Screenshot Assets

TradingView screenshots are imported from `src/resources/` in `src/App.jsx`. Keep descriptive `alt` text and use lazy loading for non-hero images when adding or changing screenshots.

## Update SEO

Update the SEO metadata in `index.html`:

- `<title>`
- Meta description
- Canonical URL
- Open Graph tags
- Twitter card tags
- JSON-LD structured data

Keep one H1 on the page and maintain logical section headings in `src/App.jsx`.

## Deployment Options

This is a static Vite site and can be deployed to:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any static hosting provider
