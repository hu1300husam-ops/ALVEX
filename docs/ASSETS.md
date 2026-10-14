# Asset register and production replacement list

Status as of this commit. Every item below is a development asset unless marked otherwise.

## Hero photography

| File | Source | Size | Status | Replace before production |
|---|---|---|---|---|
| `public/hero/hero-source.png` | Generated conceptual background (no text, logos, people or signage) | 1376 × 768 | Temporary | Yes |
| `public/hero/hero-desktop.webp` | Web export of the source | 1376 × 768 | Temporary | Yes |
| `public/hero/hero-mobile.webp` | Portrait crop of the source, around the cranes | 460 × 648 | Temporary | Yes |

- The desktop source is below the 2560 px target. The tools available here cannot produce a larger source, and upscaling would not add real detail, so it was not done.
- The image is generic. It shows a container port and is not identified as any specific location. It must not be presented as ALVEX documentation.
- Replace it with approved, high-resolution photography (2560 px or wider on desktop, and a portrait crop of at least 1080 px wide for mobile). Use approved company photography where it exists.

## Logo

| File | Source | Use |
|---|---|---|
| `public/brand/alvex_wordmark_original.png` | User-supplied official wordmark | Light backgrounds (navy) |
| `public/brand/alvex_wordmark_white.png` | Derived from the official wordmark: the same alpha channel with every colour channel set to 255 | Dark backgrounds |
| `public/brand/alvex_wordmark_navy.png` | Copy of the official wordmark, kept for reference | Not referenced by the page |
| `app/icon.png` (512), `app/apple-icon.png` (180), `app/favicon-32.png` (32) | Resized from the official monogram | Favicon and app icons |

- The white variant only changes colour. Its geometry and alpha are identical to the official file. It is not redrawn.
- The page no longer applies a CSS `invert` filter to the logo.

## Other kit assets

- `ALVEX_Website_Visual_Kit/`: the original visual kit as committed on the branch. Its README calls the photographs AI-generated concept visuals, not authentic ALVEX documentation.
- `ALVEX_Website_Visual_Kit/04_Brand_Backgrounds/*.svg`: the two SVG files are 0 bytes. They are not used.
- Trade and events photographs in the kit are not yet used on the homepage. They are concept visuals. Several show AI-generated signage, and the Canton Fair images could imply official affiliation. Do not use them as proof of operations.

## Open items before production

1. Approved hero photography at 2560 px or wider, plus a mobile crop.
2. Confirmation of the company location wording (currently "China", with no city).
3. A white or navy logo confirmed by the owner, if the derived variant is not accepted.
4. Written confirmation of licensed rights for any stock or generated image used in production.

## Generated concept images (added with the Insights articles)

| File | Used on | Notes |
|---|---|---|
| `public/images/about-office.jpg` | Homepage, About | Generated concept image. No people, text or identifiable place. Captioned "Illustrative image." |
| `public/images/insight-verification.jpg` | Homepage, Operations, verification article | Generated still life of measuring tools. Captioned as illustrative. |
| `public/images/insight-supplier-evaluation.jpg` | Homepage Insights, meeting article | Generated still life of a notebook, pen and calculator. |
| `public/images/insight-terms.jpg` | Homepage Insights, FOB/CIF article | Generated still life. Map lines are not legible text. |
| `public/images/canton-hall.jpg` | Canton Fair section | Generated exhibition-hall interior. Captioned "Not an ALVEX event." No logos, flags or landmarks. |
| `public/images/service-warehouse.jpg` | Services index, Warehousing service page | Generated concept image of an empty, organised warehouse. No text or identifiable site. |
| `public/images/service-factory.jpg` | Services index, Factory visits service page | Generated concept image of a production line. No people or identifiable factory. |

- These are generated concept images, not photographs of ALVEX work. Do not describe them as company documentation.
- The kit photos `02_Trade_and_Sourcing/factory_production.webp` and `quality_inspection.webp` are not used.
- Before launch, confirm written licence rights for these generated images, as item 4 above requires.
