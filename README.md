# ONE MORE TRAVEL / 玩陌旅行

Boutique luxury travel website — built with Next.js 14 (Pages Router), bilingual EN/中文, fully static-generated, 118 pre-rendered routes.

---

## Quick Start

```bash
# Install dependencies
npm install

# Run local development server (no email setup needed to view the site)
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Start production server locally
npm start
```

---

## What's Inside

| Section | Routes |
|---|---|
| Home | 1 |
| About | 1 |
| Destinations | 1 index + 10 detail = 11 |
| Hotels & Lodges | 1 index + 20 detail = 21 |
| Travel Styles | 1 index + 8 detail = 9 |
| Extraordinary Experiences | 1 index + 6 detail = 7 |
| Journeys | 1 index + 8 detail = 9 |
| **Journal** | 1 index + **58 articles** = 59 |
| Tailor-Made Inquiry | 1 |
| Contact (redirects to /inquiry) | 1 |
| **Total static pages** | **118** |

---

## Inquiry Form Setup (Required for Production)

The form at `/inquiry` POSTs to `/api/inquiry`, which sends email via **Resend**.

**Without setting up Resend, the form will return a "service not configured" error.** The form will still display and validate locally.

To enable email sending, see `SETUP-EMAIL.md`. Short version:

1. Sign up at https://resend.com (free tier: 100/day, 3,000/month)
2. Create API key in dashboard
3. Copy `.env.local.example` → `.env.local`
4. Fill in `RESEND_API_KEY`
5. Run `npm run dev` and submit the form

For Vercel deployment, add the same env vars in Project Settings.

---

## File Architecture

```
/lib/                      Data layer — every page reads from here
  images.js                Master image registry (140 entries with alt + status)
  content.js               Nav, footer, homepage, about, inquiry content
  destinations.js          10 destinations
  hotels.js                20 hotels (13 brands + safari/villas/wellness)
  travelStyles.js          8 travel styles
  experiences.js           6 extraordinary experiences
  journeys.js              8 journey itineraries
  journal.js               58 journal articles, 12 categories

/components/               Reusable components
  Nav.js                   9-item nav with mobile menu
  Footer.js                4-column footer
  SafeImg.js               <img> with branded SVG fallback (no broken icons)
  PageHero.js              Hero header for all interior pages
  Label.js                 Section eyebrow label
  InquiryForm.js           Working form: validation + loading + success + error
  DestinationCard.js, HotelBrandCard.js, TravelStyleCard.js,
  ExperienceCard.js, JourneyCard.js, JournalCard.js

/pages/                    Next.js routing
  _app.js, _document.js
  index.js                 Homepage
  about.js
  inquiry.js, contact.js (redirects)
  destinations/            index.js + [slug].js
  hotels/                  index.js + [slug].js
  travel-styles/           index.js + [slug].js
  experiences/             index.js + [slug].js
  journeys/                index.js + [slug].js
  journal/                 index.js + [slug].js — with category filter
  api/inquiry.js           Resend email handler

/context/LangContext.js    Bilingual EN/中文 toggle + html lang attr
/styles/globals.css        Design system + Chinese typography refinements
/public/images/            Image folder structure (placeholders use Unsplash CDN)
```

---

## Image System

All images currently load from Unsplash CDN as temporary placeholders. The registry in `lib/images.js` has 140 keyed entries, each with:

```js
'dest-italy': {
  id: 'photo-1523906834658-6e24ef2386f9',
  alt: 'Cinque Terre colourful village on Italian Riviera cliff',
  category: 'destination',
  note: 'Italy — coastal village. Replace with approved media kit asset.',
}
```

### Replacing an Image

1. Drop your file into `/public/images/destinations/italy.jpg` (or wherever)
2. In `lib/images.js`, find the registry key (e.g. `'dest-italy'`) and add:
   ```js
   url: '/images/destinations/italy.jpg',
   ```
3. Update `pic()` function at the bottom of `lib/images.js` — uncomment the `if (entry?.url) return entry.url;` line (currently only `id` is used).
4. Set `status: 'approved'` in that entry.

### No Broken Images

Every image renders through `<SafeImg>`. If a URL 404s, it falls back to a branded ONE MORE TRAVEL SVG placeholder — never a broken-image icon.

---

## Typography

| Use | Font Stack |
|---|---|
| English headings | Cormorant Garamond → Noto Serif SC → Songti SC → fallbacks |
| English body | Jost → Noto Sans SC → PingFang SC → fallbacks |
| Chinese paragraphs | Noto Sans SC / PingFang SC with refined `:lang(zh)` line-height |
| Chinese headings | Noto Serif SC / Songti SC with tighter letter-spacing |

Mobile sizes are reduced via media queries to prevent oversized Chinese characters on narrow screens.

The `<html>` element gets `lang="en"` or `lang="zh"` automatically based on the user's choice (which persists across sessions via localStorage).

---

## Brand & Voice

Tone: human luxury travel advisor, not a tourism board.

Headings and modules use phrases like:
- "Our Thoughts"
- "If It Were Us"
- "Best For"
- "Suggested Pace"
- "Curated Inspirations"

NOT phrases like:
- "Properties We Frequently Arrange" (sounds restrictive)
- "Unforgettable journeys await" (cliché)

---

## Factual Accuracy Notes

We treat the following as known facts:

- **Aman Kuda Huraa** does not exist. Kuda Huraa is Four Seasons. Any reference is a bug.
- **Aman Maldives** is a future opening in Vaavu Atoll. It is marked "Coming Soon / Future Opening" — never recommended as currently operating.
- The Maldives hotels we recommend as current operating: Soneva Fushi, Cheval Blanc Randheli, JOALI Maldives, Four Seasons Landaa Giraavaru, Four Seasons Kuda Huraa, Patina Maldives, The St. Regis Maldives Vommuli, One&Only Reethi Rah.

---

## Deployment (Vercel)

```bash
# After local changes:
git add .
git commit -m "your message"
git push

# In Vercel dashboard:
# Settings → Environment Variables → Add:
#   RESEND_API_KEY=re_xxxx
#   INQUIRY_TO_EMAIL=omtravel@onemoretravel.com
#   RESEND_FROM_EMAIL=omtravel@onemoretravel.com  (after domain verification)
```

Vercel auto-deploys on push to main.

---

## Versioning

| Version | Changes |
|---|---|
| v4 | Full site build, 9-item nav, all routes |
| v5 | Working email, SafeImg, image registry |
| v6 | Image audit, Bvlgari, factual corrections |
| v7 | 58 journal articles, 7 new hotel brands, Aman Maldives Coming Soon, Chinese font stack |
| v8 | All 58 journal articles now have full body content (no placeholders), 11 priority images replaced (calmer hero, Chengdu-feeling about, emotional family, deduplicated safari/wellness/villas), refined article-page typography for Chinese readability |
| v9 | Image-only correction pass: 27 images replaced to fix topic mismatches (Family vs Celebration, Cheval Blanc, Belmond, Luxury Rail, Expedition, Chengdu origin story, About Us sections); fixed data-mapping bugs in travelStyles.js and experiences.js |
| **v10** | Full image-only refinement pass: every one of 140 registry entries now uses a confirmed-working Unsplash ID (no more dark placeholders, no broken IDs that render unexpected content like "toys for Aman" or "Canada flag for Bvlgari"); all 22 user-flagged problems matched to a topic-accurate confirmed-good ID; journal article images rationalised to topic |

---

## License

Proprietary — © 2025 ONE MORE TRAVEL / 玩陌旅行
