# ALVEX — Website

Business bridge to China: sourcing, supplier verification, commercial coordination and trade support, from Yiwu.

## Status

- **Stage:** Homepage visual refinement (Phase 1 and 2) for review. Inner pages wait for approval.
- **Review screenshots:** `docs/review/homepage/`
- **Not built yet, by design:** inner pages and the Start Your Project form. They wait for the homepage direction to be approved.

## Creative directions

See [`docs/creative-directions/README.md`](docs/creative-directions/README.md) for the three directions, the evaluation, and the selection rationale. Open the `*.html` previews in a browser to compare them.

## Stack

- Next.js 15 (App Router), React 19, TypeScript 5
- Tailwind CSS v4
- Framer Motion 11 (restrained entrances, reduced-motion aware)

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint     # TypeScript check
```

## Structure

```
app/                  routes, global styles, metadata, sitemap, robots
components/home/      homepage sections (one file per section)
components/ui/        reusable primitives (Reveal, Figure, Button)
content/site.ts       verified company content: contact, services, process, Canton Fair, insight topics
docs/creative-directions/   creative direction previews and evaluation
```

## Placeholders and items to verify before launch

These are deliberate. Nothing below is invented; each item is either a placeholder or unconfirmed.

| Item | Current state |
|---|---|
| ALVEX logo | Not yet supplied. The uploaded `ALVEX logo.pdf` was not present in the workspace. Once provided, add the SVG to `/public/brand/` and set `brand.logo` in `content/site.ts`. The component is `components/brand/logo.tsx`. |
| Photography | Not yet supplied. Homepage uses designed brand plates (`components/brand/plate.tsx`) with no stock imagery. Approved photos can be passed as `src` / `alt`. |
| Typeface | Manrope Variable is self-hosted via `@fontsource-variable/manrope`. |
| WhatsApp `+86 147 2700 7000` | Link is live. Activity still needs confirmation (`content/site.ts`). |
| Social handle `alvexcompany` | Platform unconfirmed; shown only as "ALVEX Company". |
| Site domain | `NEXT_PUBLIC_SITE_URL` defaults to a placeholder. Set it to the real domain for canonical URLs, sitemap and Open Graph. |
| Open Graph image | Not yet created. Requires approved brand artwork. |
| Process claims | The How We Work and Advantage copy describes ALVEX's working practice (written summaries, checks before deposits, etc.). Confirm each with the team before launch. |
| Start Your Project form | **Not built.** The homepage CTA opens a pre-filled email draft to alvextrade1@gmail.com. The multi-step form needs a confirmed backend, spam protection and a privacy notice before it is enabled. |
| Privacy notice / Terms | Marked "in preparation" in the footer. |
| Service detail pages, Canton Fair page | Not built. Homepage service entries link to the contact section for now. |
| Insight articles | Topics only. No article dates, authors or read times are shown until articles exist. |
| Canton Fair | The section describes ALVEX's support services. ALVEX is not presented as affiliated with the Canton Fair organisers unless verified. |

## Accessibility and performance notes

- Semantic landmarks, skip link, visible focus styles, 48px+ touch targets.
- Mobile menu: Escape closes it, body scroll is locked while open, and it is labelled with `aria-expanded`.
- Motion is limited to entrances, the hero line reveal and the How We Work progress rail. All of it is disabled under `prefers-reduced-motion`.
- Images are not loaded yet, so there is no image weight. When photos are added, use `next/image` with explicit sizes.
