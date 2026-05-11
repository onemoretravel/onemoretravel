# ONE MORE TRAVEL — Email Enquiry Setup

## Overview

The Tailor-Made Inquiry form (`/inquiry`) submits to `/api/inquiry`,
which sends an email via **Resend** — the simplest production email
service for Next.js on Vercel.

---

## 1. Create a Resend Account

1. Go to **https://resend.com** and sign up (free)
2. Free tier: 100 emails/day, 3,000/month — sufficient for enquiries
3. After signup, go to **API Keys → Create API Key**
4. Name it `onemoretravel-production` (or similar)
5. Copy the key — it starts with `re_`

---

## 2. Environment Variables

Three variables are needed. All are optional except `RESEND_API_KEY`.

| Variable             | Required | Description                                      |
|----------------------|----------|--------------------------------------------------|
| `RESEND_API_KEY`     | **Yes**  | Your Resend API key (starts with `re_`)          |
| `RESEND_FROM_EMAIL`  | No       | Sender address (see Domain Verification below)  |
| `INQUIRY_TO_EMAIL`   | No       | Where enquiries land (default: `omtravel@onemoretravel.com`) |

---

## 3. Local Development

```bash
# Copy the example file
cp .env.local.example .env.local

# Edit .env.local:
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=onboarding@resend.dev   # no domain needed for testing
INQUIRY_TO_EMAIL=your-personal@email.com  # where test emails go

# Start dev server
npm run dev
```

Then open `http://localhost:3000/inquiry`, fill in the form, and submit.
You should receive:
- An enquiry email at `INQUIRY_TO_EMAIL`
- A confirmation email at the address you entered in the form

> **Note:** With `onboarding@resend.dev` as sender, the FROM name shows
> "Resend" but the content is correct. Use domain verification for production.

---

## 4. Domain Verification (Production)

To send from `omtravel@onemoretravel.com`:

1. In Resend dashboard → **Domains** → **Add Domain**
2. Enter `onemoretravel.com`
3. Resend shows DNS records to add (TXT + MX + DKIM entries)
4. Add these in your DNS provider (Cloudflare, Route53, GoDaddy, etc.)
5. Click **Verify** in Resend (can take up to 48h, usually faster)
6. Once green: set `RESEND_FROM_EMAIL=omtravel@onemoretravel.com`

---

## 5. Vercel Deployment

```bash
# Push code to GitHub first
git add .
git commit -m "add working inquiry form with Resend"
git push

# Then in Vercel dashboard:
# Project → Settings → Environment Variables → Add each variable:
#   RESEND_API_KEY     = re_xxxx...
#   RESEND_FROM_EMAIL  = omtravel@onemoretravel.com  (after domain verify)
#   INQUIRY_TO_EMAIL   = omtravel@onemoretravel.com

# Redeploy from Vercel dashboard or:
git commit --allow-empty -m "trigger redeploy"
git push
```

---

## 6. What the Form Sends

**Email to ONE MORE TRAVEL** (`INQUIRY_TO_EMAIL`):
- Subject: `New Tailor-Made Enquiry from {Name}`
- HTML table with all form fields
- Reply-To set to the enquirer's email for one-click replies

**Confirmation to enquirer** (`email` field):
- Subject: `Your Enquiry — ONE MORE TRAVEL / 玩陌旅行`
- Elegant bilingual confirmation message
- ONE MORE TRAVEL branding (dark green + gold)

---

## 7. Spam Prevention

Three layers are implemented:

1. **Honeypot field** — hidden `_honey` input. Bots fill it; humans don't.
   If filled, the request returns `200 OK` silently (bot thinks it worked).

2. **Server-side validation** — name (min 2 chars) and valid email required.
   Returns `400` with field-level errors otherwise.

3. **Rate limiting** — 3 requests per IP per 10 minutes (in-memory store).
   Returns `429 Too Many Requests` when exceeded.

---

## 8. Testing Checklist

- [ ] Fill form with valid data → enquiry email arrives at INQUIRY_TO_EMAIL
- [ ] Fill form with valid data → confirmation arrives at submitted email
- [ ] Submit with blank name → field error shown, no email sent
- [ ] Submit with invalid email → field error shown
- [ ] Submit 4+ times quickly → rate limit message shown on 4th attempt
- [ ] Check spam folder if emails don't arrive (especially with onboarding@resend.dev)

---

## 9. Troubleshooting

**Form submits but no email arrives:**
- Check `RESEND_API_KEY` is set correctly in Vercel env vars
- Check Vercel function logs: Deployments → Functions → `/api/inquiry`
- Verify Resend dashboard → Logs for any send errors

**"Email service not configured" error:**
- `RESEND_API_KEY` env var is missing or empty

**Emails go to spam:**
- Verify domain in Resend and set `RESEND_FROM_EMAIL` to `@onemoretravel.com`
- Unverified sender (`onboarding@resend.dev`) is more likely to be flagged

**Form shows network error:**
- Check browser console for the actual error
- Ensure the `/api/inquiry` route deployed correctly
