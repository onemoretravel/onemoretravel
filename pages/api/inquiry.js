import { Resend } from 'resend';

// ─── Email HTML builders ──────────────────────────────────────────────────────

function buildInquiryHtml(data) {
  const rows = [
    ['Name', data.name],
    ['WeChat / WhatsApp / Phone', data.wechat],
    ['Email', data.email],
    ['Departure City', data.departure],
    ['Travel Interests', data.interests],
    ['Destination Interests', data.dest],
    ['Travel Dates', data.dates],
    ['Number of Travellers', data.travelers],
    ["Children's Ages", data.children],
    ['Travel Style', data.style],
    ['Hotel Preference', data.hotel],
    ['Budget Range', data.budget],
    ['Special Occasion', data.occasion],
    ['Anything Important', data.notes],
  ]
    .filter(([, v]) => v && String(v).trim())
    .map(([k, v]) => `
      <tr>
        <td style="padding:8px 16px 8px 0;font-family:sans-serif;font-size:12px;color:#9a9189;white-space:nowrap;vertical-align:top;width:200px;">${k}</td>
        <td style="padding:8px 0;font-family:sans-serif;font-size:13px;color:#1a1918;vertical-align:top;line-height:1.6;">${String(v).replace(/</g,'&lt;').replace(/>/g,'&gt;')}</td>
      </tr>`)
    .join('');

  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#f5f5f0;">
<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:40px 20px;">
<table width="600" cellpadding="0" cellspacing="0" style="background:#fff;max-width:600px;">
  <tr><td style="background:#1B2D24;padding:28px 36px;">
    <p style="margin:0;font-family:Georgia,serif;font-size:18px;color:#fff;letter-spacing:0.12em;">ONE MORE TRAVEL</p>
    <p style="margin:4px 0 0;font-family:sans-serif;font-size:9px;color:#C4A35A;letter-spacing:0.22em;text-transform:uppercase;">玩陌旅行 · New Tailor-Made Enquiry</p>
  </td></tr>
  <tr><td style="padding:28px 36px 8px;">
    <p style="margin:0 0 2px;font-family:sans-serif;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#C4A35A;">Tailor-Made Enquiry</p>
    <h1 style="margin:0 0 4px;font-family:Georgia,serif;font-size:24px;font-weight:normal;color:#1a1918;">From ${data.name || 'New Client'}</h1>
    <p style="margin:0;font-family:sans-serif;font-size:11px;color:#9a9189;">${new Date().toLocaleDateString('en-GB',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}</p>
  </td></tr>
  <tr><td style="padding:16px 36px 36px;">
    <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #eae3d8;">
      <tr><td style="height:16px;"></td></tr>
      ${rows}
    </table>
  </td></tr>
  <tr><td style="padding:20px 36px;background:#f8f5ee;border-top:1px solid #eae3d8;">
    <p style="margin:0;font-family:sans-serif;font-size:11px;color:#9a9189;">ONE MORE TRAVEL · omtravel@onemoretravel.com · WeChat: wanmotravel</p>
  </td></tr>
</table>
</td></tr></table>
</body></html>`;
}

function buildConfirmationHtml(name) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#f5f5f0;">
<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:40px 20px;">
<table width="600" cellpadding="0" cellspacing="0" style="background:#fff;max-width:600px;">
  <tr><td style="background:#1B2D24;padding:28px 36px;">
    <p style="margin:0;font-family:Georgia,serif;font-size:18px;color:#fff;letter-spacing:0.12em;">ONE MORE TRAVEL</p>
    <p style="margin:4px 0 0;font-family:sans-serif;font-size:9px;color:#C4A35A;letter-spacing:0.22em;text-transform:uppercase;">玩陌旅行</p>
  </td></tr>
  <tr><td style="padding:40px 36px 32px;">
    <h1 style="margin:0 0 24px;font-family:Georgia,serif;font-size:26px;font-weight:normal;color:#1a1918;line-height:1.35;">
      Thank you for reaching out${name ? ', ' + name : ''}.
    </h1>
    <p style="margin:0 0 16px;font-family:sans-serif;font-size:14px;color:#5a5550;line-height:1.85;font-weight:300;">
      We have received your enquiry and will be in touch within one business day.
    </p>
    <p style="margin:0 0 24px;font-family:sans-serif;font-size:14px;color:#5a5550;line-height:1.85;font-weight:300;">
      We look forward to thoughtfully designing your journey.
    </p>
    <hr style="border:none;border-top:1px solid #eae3d8;margin:28px 0;" />
    <p style="margin:0;font-family:sans-serif;font-size:13px;color:#9a9189;line-height:1.85;">
      感谢您的咨询，我们会尽快与您联系，并一起慢慢设计这段旅程。
    </p>
  </td></tr>
  <tr><td style="padding:20px 36px;background:#f8f5ee;border-top:1px solid #eae3d8;">
    <p style="margin:0 0 5px;font-family:sans-serif;font-size:11px;color:#9a9189;">ONE MORE TRAVEL / 玩陌旅行</p>
    <p style="margin:0;font-family:sans-serif;font-size:11px;color:#9a9189;">omtravel@onemoretravel.com · WeChat: wanmotravel · www.onemoretravel.com</p>
  </td></tr>
</table>
</td></tr></table>
</body></html>`;
}

// ─── Rate limiting store (in-memory, resets on cold start) ────────────────────
const submissionStore = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 3;
  const key = ip || 'unknown';
  const history = submissionStore.get(key) || [];
  const recent = history.filter(t => now - t < windowMs);
  if (recent.length >= maxRequests) return true;
  submissionStore.set(key, [...recent, now]);
  return false;
}

// ─── Handler ──────────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limit
  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress;
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const {
    name, wechat, email, departure, interests, dest,
    dates, travelers, children, style, hotel,
    budget, occasion, notes,
    _honey, // honeypot
  } = req.body || {};

  // Honeypot: bots fill this hidden field
  if (_honey) {
    return res.status(200).json({ success: true });
  }

  // Validation
  const errors = {};
  if (!name || String(name).trim().length < 2) {
    errors.name = 'Please enter your name.';
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  // Check API key
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[inquiry] RESEND_API_KEY not set');
    return res.status(500).json({
      error: 'Email service not configured. Please contact us directly at omtravel@onemoretravel.com',
    });
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  const toEmail   = process.env.INQUIRY_TO_EMAIL  || 'omtravel@onemoretravel.com';

  try {
    // 1. Send inquiry details to ONE MORE TRAVEL
    await resend.emails.send({
      from:    `ONE MORE TRAVEL <${fromEmail}>`,
      to:      [toEmail],
      replyTo: String(email).trim(),
      subject: `New Tailor-Made Enquiry from ${String(name).trim()}`,
      html:    buildInquiryHtml(req.body),
    });

    // 2. Send confirmation to enquirer (non-blocking — failure is non-fatal)
    try {
      await resend.emails.send({
        from:    `ONE MORE TRAVEL <${fromEmail}>`,
        to:      [String(email).trim()],
        subject: 'Your Enquiry — ONE MORE TRAVEL / 玩陌旅行',
        html:    buildConfirmationHtml(String(name).trim()),
      });
    } catch (confirmErr) {
      console.warn('[inquiry] Confirmation email failed (non-fatal):', confirmErr.message);
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[inquiry] Resend error:', err);
    return res.status(500).json({
      error: 'Failed to send your enquiry. Please try again or email us directly at omtravel@onemoretravel.com',
    });
  }
}
