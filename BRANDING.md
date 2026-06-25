cat > BRANDING.md << 'EOF'
# EraLean Brand System
Source of truth for all design, copy, and code decisions.

## Positioning
"The lean growth engine."
Tagline: Less waste. More growth.
Voice: Direct. Evidence-led. Lean — no filler. Confident, never hyped. End on a point.

## Colours
| Token      | Hex      | Tailwind class | Use |
|------------|----------|----------------|-----|
| ink        | #0B0B0C  | bg-ink         | Primary background |
| carbon     | #161618  | bg-carbon      | Raised surfaces / cards |
| slate      | #26262A  | border-slate   | Hairline dividers on dark |
| ash        | #8C8C93  | text-ash       | Muted / secondary text |
| mist       | #E4E4E6  | border-mist    | Dividers on light |
| paper      | #FAFAF9  | bg-paper       | Light section background |
| white      | #FFFFFF  | text-white     | Primary text on dark |
| volt       | #BDFF00  | text-volt      | THE one accent — max ~10% of any view |
| volt-deep  | #9AC700  | text-volt-deep | Volt as text on light backgrounds |

Rule: Volt is ONLY used for the brand dot and single key accents.
Never wash a section in it. Never recolour the wordmark.

## Typography
- Display / headlines: Inter Tight, weight 600, letter-spacing -0.03em (class: font-display tracking-display)
- Body: Inter, weight 300, line-height 1.6 (class: font-sans)
- Editorial accent: Newsreader, italic — pull-quotes and brand statements only (class: font-serif)
- Metrics / numbers: always tabular figures

## The Dot — brand signature
The full stop in `eralean.` is the brand atom.
It is the ONLY Volt element. Never use Volt anywhere else without a strong reason.
Reuse it as:
- Section eyebrow markers
- List bullets
- A "now running" status pulse (animated)
- The period ending a confident headline
Import from: src/components/brand/Dot.tsx

## Motion
- Smooth scroll: Lenis (ReactLenis root, lerp 0.1) — src/components/SmoothScroll.tsx
- Reveals: FadeIn (fade + 20px rise) — src/components/motion/FadeIn.tsx
- Scroll-zoom: ScaleOnScroll (~4% subtle) — src/components/motion/ScaleOnScroll.tsx
- Rules: transform/opacity only. prefers-reduced-motion disables all motion.
  Never animate layout properties. Never aggressive zoom or bounce.

## Aesthetic rules
- Left-aligned almost everything
- One idea per section
- Generous whitespace — padding > decoration
- Hairline 1px dividers (class: hairline), never heavy borders or boxes
- Premium = restraint, not decoration
- No shadows, gradients on the wordmark, or effects on the logo

## Services (3 only)
1. Website — custom build for local/service businesses + Shopify for ecom
2. Ads — Google + Meta (both audiences)
3. Email Marketing — ecommerce only

## Do not
- Add a 4th service page (AI / Social / Acquisition are dead routes)
- Use discount language anywhere
- Stack buzzwords
- Remove trackLead() calls from CTAs
- Touch api/subscribe.ts, AuditForm.tsx, AuditPopup.tsx, analytics.ts without explicit instruction
- Hardcode brand values — read from tailwind.config.js / index.css CSS vars
EOF