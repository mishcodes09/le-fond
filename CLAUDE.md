# CLAUDE.md — Le Fond System Rules

This file defines how every part of this product is built.
It is not a brief. It is not a layout doc. It is the operating system.

---

## Brand Identity

**Company:** Le Fond
**Tagline:** Systems that build businesses.
**One-liner:** We build the systems that let a R10M contractor run like a R50M contractor.

**What we are:** Operational infrastructure specialists for construction and service businesses in South Africa.

**What we are not:** A web design agency, freelancer, generalist digital shop, or tech company that doesn't understand the trades.

**Who we serve:** Residential contractors, electricians, plumbers, interior studios — businesses where the owner is the bottleneck.

**Geography:** South Africa (Cape Town, Johannesburg, Pretoria, Durban)

---

## Tone of Voice

**Voice character:** Trusted foreman. Solid, structural, direct.

**Speak in:** leads, revenue, jobs, time saved, missed opportunities.

**Never use:**
- "digital transformation"
- "elevate your presence"
- "synergy"
- "innovative solutions"
- vague agency language of any kind

**Rules:**
- Outcome-first sentences. State the result, then explain.
- Short sentences. No padding.
- WhatsApp is enhanced, not replaced.
- Never hype-driven, never condescending, never salesy.

**Voice examples:**
- "Your phone stops being the CRM."
- "A quote request at 10pm gets answered automatically."
- "Stop losing leads because no one replied fast enough."

---

## Design System

### Colors

| Token     | Hex       | Usage                          |
|-----------|-----------|--------------------------------|
| Ink       | `#0e0d0b` | Primary dark bg, headings      |
| Surface   | `#f5f3ef` | Primary light bg, cards        |
| Coral     | `#c94f2c` | CTA buttons only               |
| Teal      | `#1a6b54` | Trust signals, success states  |
| Amber     | `#b86e0b` | Secondary accents only         |

**Rules:**
- Coral is reserved for CTA actions only. Do not use decoratively.
- Teal signals credibility and trust, not decoration.
- Amber is a tertiary accent — use sparingly.
- No gradients. No blobs. No glow effects.

### Typography

| Role      | Font             | Usage                              |
|-----------|------------------|------------------------------------|
| Headings  | DM Serif Display | All H1–H3, section titles          |
| Body      | Outfit           | Body copy, descriptions, UI labels |
| Mono      | DM Mono          | Section labels, numbers, tags, data|

**Rules:**
- Section labels always in DM Mono, uppercase, small size, tracked out.
- Headings are editorial weight — large, confident, left-aligned by default.
- Body text is never a wall. Break into short paragraphs.

### UI Direction

- Industrial minimalism. Blueprint + fintech aesthetic.
- No stock photography. No icons unless strictly necessary.
- Use thin structural lines and grid to create visual order.
- Cards are flat with subtle borders — no shadows, no blur effects.
- Border radius: minimal (4px max) or none.
- Spacing is structured, not decorative. Use whitespace to signal hierarchy.
- Animations: Framer Motion only. Subtle entry fades, no bouncing or spinning.

---

## Tech Stack

| Layer       | Tool                          |
|-------------|-------------------------------|
| Framework   | Next.js 14 (App Router)       |
| Language    | TypeScript (strict)           |
| Styling     | Tailwind CSS                  |
| Animation   | Framer Motion                 |
| Fonts       | next/font (Google Fonts)      |
| Deployment  | Vercel                        |

**Component rules:**
- All components live in `/components/`
- Sections live in `/components/sections/`
- Shared UI primitives live in `/components/ui/`
- No inline styles. Tailwind only.
- No default exports from UI primitives — named exports only.

---

## Conversion Goal

**Primary CTA:** Book a discovery call
**Secondary CTA:** WhatsApp enquiry

Every section must move the user toward one of these two actions.
CTA must appear in: navbar, hero, and final section minimum.
Coral button = primary. Ghost/outline = secondary.

---

## UX Principles

1. **Recognition over explanation.** Make the reader feel seen before you explain what you do.
2. **Pain before solution.** Establish the problem clearly. Don't rush to the pitch.
3. **Reduce cognitive load.** One idea per section. No multi-message sections.
4. **Outcome-first copy.** Lead with the result. Explain how after.
5. **No friction on first CTA.** Never put a form before a call. Discovery call link goes to Calendly or equivalent.
6. **Mobile-first.** Audience is on phones. All layouts must work on 375px.

---

## Business Rules

- Minimum project value: **R25,000**
- All engagements require a **discovery call first** — no direct quoting
- No discounting under any circumstances
- Niche is strictly construction and service businesses — no scope creep into other industries
- WhatsApp is a core channel — always include a WhatsApp CTA alongside the calendar link
