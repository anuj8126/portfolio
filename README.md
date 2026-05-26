# Anuj Kumar Srivastav — Portfolio

**Live:** [anujsrivastav.vercel.app](https://anujsrivastav.vercel.app)

Personal portfolio for **Anuj Kumar Srivastav**, Senior Product Engineer (React · TypeScript · Next.js).
Targeting senior frontend / product engineer / tech lead roles across **India, US, and UK** (remote).

Built to be fast, accessible, and recruiter-friendly — fully static, SEO-optimized, and themable.

## Stack

| Area        | Choice                                          |
| ----------- | ----------------------------------------------- |
| Framework   | Next.js 14 (App Router, static export friendly) |
| Language    | TypeScript                                      |
| Styling     | Tailwind CSS + CSS variables (dark/light theme) |
| Animation   | Framer Motion                                   |
| Icons       | lucide-react                                    |
| Theming     | next-themes                                     |
| Fonts       | Inter + JetBrains Mono (via `next/font`)        |

## What's inside

- **Hero** — name, tagline, availability badge (India / US / UK), CTAs (contact + résumé).
- **About** — six-tile metric grid (bundle size cut, API traffic reduction, KYC improvement, mentorship, etc).
- **Experience** — timeline of every role with quantified highlights and per-role tech stack chips.
- **Projects** — selected work (Unosecure, Liquidity.io, Simplici.io, Pharmeasy.in) with outcomes.
- **Skills** — 9 categorized groups + education.
- **Contact** — email, phone, LinkedIn, GitHub.
- **SEO** — Open Graph, Twitter cards, robots.txt, sitemap.xml, JSON-LD `Person` schema, keyword-tuned metadata.
- **Accessibility** — skip-to-content link, semantic landmarks, focus states, reduced-motion friendly.
- **Performance** — fully static, ~125 KB First Load JS, system fonts via `next/font`, optimized package imports.

## Edit your content

Everything is driven from a single file:

```
data/resume.ts
```

Update `profile`, `experience`, `projects`, `skills`, `highlights`, and `education` there — the entire site updates.

> Replace `/public/resume.pdf` with your latest résumé PDF so the "Download résumé" button works.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint
npm run type-check
npm run build && npm run start
```

## Deploy

**Vercel (recommended):**

1. Push this repo to GitHub.
2. Import the repo on [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js**. No env vars required.
4. Custom domain: add your domain under Project → Domains. The current production URL is [anujsrivastav.vercel.app](https://anujsrivastav.vercel.app).

**Static / any host (Netlify, Cloudflare Pages, S3):**

The site is fully static. You can add `output: 'export'` to `next.config.mjs` and run `next build` to get an `out/` folder.

## Customize the URL used in SEO

Update `siteUrl` in `app/layout.tsx` and the URLs in `app/sitemap.ts`, `app/robots.ts`, and the JSON-LD block in `app/page.tsx`.

## License

Personal use. Code structure is yours to reuse.
