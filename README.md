Production-ready landing page for the online mini-course:

«Як пережити розрив стосунків і повернутись до нормального життя»

Built with **Next.js (App Router)** + **TypeScript** + **Tailwind CSS** + **Framer Motion**.

## Getting Started

### Run locally

Install deps and run the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Build for production

```bash
npm run build
npm run start
```

## Configuration (optional)

See `env.example` and copy values into your environment.

- `NEXT_PUBLIC_SITE_URL`: used for metadataBase + sitemap + robots
- `NEXT_PUBLIC_GA_ID`: Google Analytics ID (optional)
- `NEXT_PUBLIC_META_PIXEL_ID`: Meta Pixel ID (optional)

## Project structure

- `src/content/landingContent.ts`: **single source of truth** for all landing copy (kept as-is from the content document)
- `src/components/sections/*`: each landing block = one component
- `src/components/ui/*`: reusable UI primitives (Button/Section/Reveal/etc.)
- `src/app/api/lead`: lead form handler (stub for webhook/CRM)
- `src/app/api/pay/wayforpay`: WayForPay stub (TODO for real integration)

## Notes

- No aggressive UX patterns (no timers / scarcity banners).
- Video sections are implemented with placeholders; plug in real `videoSrc` / `posterSrc` later.

- `src/components/sections/*`: each landing block = one component
- `src/components/ui/*`: reusable UI primitives (Button/Section/Reveal/etc.)
- `src/app/api/lead`: lead form handler (stub for webhook/CRM)
- `src/app/api/pay/wayforpay`: WayForPay stub (TODO for real integration)

## Notes

- No aggressive UX patterns (no timers / scarcity banners).
- Video sections are implemented with placeholders; plug in real `videoSrc` / `posterSrc` later.
