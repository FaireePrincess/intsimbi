# Intsimbi Concepts Website

Modern B2B lead-generation website for **Intsimbi Concepts**, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Create env file:

```bash
cp .env.example .env.local
```

3. Set your site URL in `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://intsimbiconcepts.com
```

4. Start dev server:

```bash
npm run dev
```

## Build and Lint

```bash
npm run lint
npm run build
```

## Deploying to Render

- `render.yaml` is included for Render web service setup.
- Configure `NEXT_PUBLIC_SITE_URL` in Render environment variables.
- Connect custom domain `intsimbiconcepts.com` in Render dashboard.

## Logo

- Place final brand asset at `public/logo.png`.
- Current implementation uses `public/logo.svg` as an immediate fallback placeholder.

## Content Architecture

- Typed content in `src/data/`
- Interfaces in `src/types/`
- Reusable components in `src/components/`
- SEO config utilities in `src/lib/metadata.ts`

