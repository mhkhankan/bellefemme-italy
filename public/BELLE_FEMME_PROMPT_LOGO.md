BELLE FEMME — PROMPT LOGO
StickyHeader Logo + Favicon Integration
April 2026 · bellefemme-italy · Lovable

Paste this prompt exactly into Lovable after Prompt 2 is verified.
All asset files have been added to the repository before this prompt runs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILES ALREADY IN REPO — DO NOT CREATE THEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

public/branding/BF_logo_full_transparent.png     — full lockup: monogram + BELLE FEMME + ATELIER E ACCADEMIA
public/branding/BF_logo_wordmark_transparent.png — monogram + BELLE FEMME only, no subline
public/branding/BF_logo_master.svg               — master vector source
public/favicon.ico                               — BF monogram favicon (replaces default)
public/favicon-32.png                            — 32×32 PNG favicon
public/apple-touch-icon.png                      — 180×180 Apple touch icon
public/favicon-192.png                           — 192×192 Android icon

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 1 — FAVICON + HEAD META
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In index.html replace the existing favicon link with:

<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png">
<meta name="og:image" content="https://bellefemme.it/branding/BF_logo_full_transparent.png">
<meta name="twitter:image" content="https://bellefemme.it/branding/BF_logo_full_transparent.png">

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 2 — STICKY HEADER LOGO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In src/components/StickyHeader.tsx find the Link to="/" block that currently contains:

<span className="font-cormorant text-sm tracking-[0.4em] uppercase text-primary">
  Atelier
</span>
<span className="font-inter text-[9px] tracking-[0.2em] uppercase text-foreground/40">
  by Mouna Chabbar
</span>

Replace the entire Link block with:

<Link to="/" className="flex items-center">
  <img
    src="/branding/BF_logo_wordmark_transparent.png"
    alt="Belle Femme Atelier"
    className="h-10 w-auto"
    style={{ objectFit: 'contain' }}
  />
</Link>

The image is 2000×976px transparent PNG — it will scale correctly to h-10 (40px tall) at any viewport width.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 3 — VERIFICATION CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

□ Browser tab shows BF monogram favicon — not default Lovable icon
□ iPhone bookmark / Add to Home Screen shows apple-touch-icon
□ StickyHeader shows BF wordmark logo — not text "ATELIER / by Mouna Chabbar"
□ Logo is visible on black header background (transparent PNG on dark)
□ Logo scales correctly — not cropped or distorted on mobile
□ Logo height consistent — does not change header height
□ og:image and twitter:image point to BF_logo_full_transparent.png
□ No broken image icons anywhere in header

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BELLE FEMME · PROMPT LOGO · APRIL 2026 · CONFIDENTIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
