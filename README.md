# ONE MORE TRAVEL / 玩陌旅行 — Official Website

A boutique luxury travel company website built with **Next.js 14** (Pages Router).  
Bilingual (English / Simplified Chinese), responsive, and ready to deploy on **Vercel**.

---

## Project Structure

```
onemoretravel/
├── pages/
│   ├── _app.js          ← Root layout: Nav + Footer + Language Provider
│   ├── _document.js     ← Custom HTML head (fonts, meta)
│   ├── index.js         ← Home page
│   ├── about.js         ← About Us
│   ├── journeys.js      ← Bespoke Journeys
│   ├── hotels.js        ← Luxury Hotels & Villas
│   ├── destinations.js  ← Destinations
│   ├── concierge.js     ← Private Transfers & Concierge
│   ├── advantages.js    ← Our Advantages (Why Us)
│   └── contact.js       ← Contact
│
├── components/
│   ├── Nav.js           ← Sticky navigation (desktop + mobile)
│   ├── Footer.js        ← Site footer
│   ├── Label.js         ← Gold section label component
│   ├── PageHero.js      ← Short hero for inner pages
│   └── ContactForm.js   ← Enquiry form with success state
│
├── context/
│   └── LangContext.js   ← Language state (EN / ZH)
│
├── lib/
│   └── content.js       ← All bilingual text + Unsplash image IDs ← EDIT HERE
│
├── styles/
│   └── globals.css      ← All styles (design tokens, layout, responsive)
│
├── public/              ← Static assets (add favicon.ico here)
├── next.config.js
├── package.json
└── README.md
```

---

## 1 · Run Locally

**Prerequisites:** Node.js 18+ and npm (or yarn / pnpm)

```bash
# 1. Enter the project folder
cd onemoretravel

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
# → http://localhost:3000
```

For a production build locally:

```bash
npm run build
npm start
```

---

## 2 · Deploy to Vercel

### Option A — Vercel CLI (recommended)

```bash
# Install Vercel CLI globally (once)
npm install -g vercel

# Deploy from inside the project folder
cd onemoretravel
vercel

# Follow the prompts:
# - Link to your Vercel account
# - Accept defaults for Next.js (auto-detected)
# - Your site is live at a .vercel.app URL
```

### Option B — GitHub → Vercel Dashboard

1. Push the `onemoretravel` folder to a **GitHub repository**
2. Log in at [vercel.com](https://vercel.com)
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel auto-detects Next.js — click **Deploy**
6. Done. Every `git push` triggers an automatic redeploy.

---

## 3 · Connect the Custom Domain `www.onemoretravel.com`

After deploying to Vercel:

1. Go to your project in the **Vercel Dashboard**
2. Click **Settings → Domains**
3. Add `www.onemoretravel.com` (and optionally `onemoretravel.com`)
4. Vercel shows you two DNS records to add:
   - **Type:** `CNAME`  **Name:** `www`  **Value:** `cname.vercel-dns.com`
   - **Type:** `A`  **Name:** `@`  **Value:** `76.76.21.21`
5. Log in to your domain registrar (e.g. Cloudflare, GoDaddy, Namecheap)
6. Add the DNS records above
7. Wait 10–60 minutes for DNS to propagate
8. Vercel automatically provisions an SSL certificate (HTTPS)

---

## 4 · Update Contact Information

Open **`lib/content.js`** and find the `contact` section.  
Update emails, WeChat, website, and locations there.

Also update the **Footer** contact details directly in **`components/Footer.js`** (lines ~40–48).

To update the contact form backend (currently front-end only with success state):  
Edit **`components/ContactForm.js`** — replace the `handleSubmit` function with a real API call, e.g. [Formspree](https://formspree.io), [Resend](https://resend.com), or a Next.js API route.

---

## 5 · Update Images

All images are sourced from **Unsplash** (free commercial use, no attribution required).

Open **`lib/content.js`** → find the `IMAGES` object at the top of the file.  
Each key maps a section to an Unsplash photo ID.

**To swap an image:**
1. Go to [unsplash.com](https://unsplash.com) and find a photo you like
2. Copy the photo ID from the URL (e.g. `photo-1520250497591-112f2f40a3f4`)
3. Replace the corresponding value in `IMAGES` in `lib/content.js`

**To use your own photography:**
1. Place images in the `public/` folder (e.g. `public/images/hero.jpg`)
2. Update `lib/content.js` → replace the Unsplash helper call with `/images/hero.jpg`
3. In `lib/content.js`, update the `pic()` function or bypass it per image

---

## 6 · Update Page Content

All bilingual text lives in **`lib/content.js`** under the `CONTENT` object.

- Each bilingual value has the shape: `{ en: '...', zh: '...' }`
- Update English (`en`) and Chinese (`zh`) values independently
- Page structure changes go in the individual page files under `pages/`

---

## 7 · Add a Favicon

Place a `favicon.ico` file in the **`public/`** folder.  
It's already referenced in `pages/_document.js`.

For best results, also add:
- `public/apple-touch-icon.png` (180×180)
- `public/favicon-32x32.png`

---

## 8 · Add a Real Form Backend

The contact form currently shows a success state on submit without sending data.

**Recommended options:**

### Formspree (zero backend)
```js
// In components/ContactForm.js
async function handleSubmit(e) {
  e.preventDefault();
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });
  setSent(true);
}
```

### Next.js API Route + Resend
Create `pages/api/contact.js`:
```js
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  await resend.emails.send({
    from: 'website@onemoretravel.com',
    to: 'omtravel@onemoretravel.com',
    subject: 'New Enquiry from Website',
    text: JSON.stringify(req.body, null, 2),
  });
  res.status(200).json({ ok: true });
}
```

---

## Tech Stack

| Layer      | Technology |
|------------|------------|
| Framework  | Next.js 14 (Pages Router) |
| Styling    | Global CSS (custom design system, no Tailwind) |
| Fonts      | Google Fonts — Cormorant Garamond + Jost |
| Images     | Unsplash (free commercial use) |
| Language   | React Context API |
| Deployment | Vercel |

---

## Design Tokens (colors)

| Token        | Value     | Usage |
|-------------|-----------|-------|
| `--ivory`   | `#F8F5EE` | Page background |
| `--gold`    | `#C4A35A` | Accents, labels |
| `--green`   | `#1B2D24` | Dark sections, buttons |
| `--charcoal`| `#1A1918` | Text, dark sections |
| `--stone`   | `#EAE3D8` | Alternate section bg |
| `--muted`   | `#9A9189` | Secondary text |

All tokens are in `styles/globals.css` under `:root`.

---

*ONE MORE TRAVEL / 玩陌旅行 · Chengdu · Melbourne · www.onemoretravel.com*
