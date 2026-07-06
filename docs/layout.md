# docs/layout.md — Le Fond Website Blueprint

This file defines the current website layout, UX flow, and structural decisions.
It is not permanent. Update it as the product evolves.

For system rules (colors, tone, tech), see `CLAUDE.md`.

---

## UX Flow

The target user is a contractor running everything from their phone.
They scan fast. They trust outcomes, not credentials.

The page must move through these stages in order:

| Stage | Section | Goal |
|-------|---------|------|
| 1 | Hero | Immediate recognition — "that's me" |
| 2 | Problem | Amplify the pain — build urgency |
| 3 | Solution Bridge | Reframe — position Le Fond clearly |
| 4 | Services | Show exactly what they get |
| 5 | How it Works | Remove risk — make the process clear |
| 6 | Tech Stack | Signal credibility |
| 7 | Final CTA | Force a decision |

---

## Page Structure

### NAVBAR
- Fixed. Transparent → ink background on scroll.
- Left: `LE FOND` wordmark (DM Serif Display)
- Center: `Services` · `How it Works`
- Right: `Book a Call` (coral button, small)

---

### HERO
- Full viewport height
- Background: Surface (`#f5f3ef`) with subtle blueprint grid (SVG, very low opacity)
- Layout: two-column — left copy, right visual

**Left column:**
- Label: `OPERATIONAL INFRASTRUCTURE` — DM Mono, uppercase, tracked, small
- H1 (DM Serif Display, large): `You are the bottleneck.`
- Subtext (Outfit): `Le Fond builds the operational systems that let construction and service businesses run without the owner at the centre of everything.`
- CTA row: `[Book a Discovery Call]` (coral, filled) + `[WhatsApp Us]` (ghost, ink border)

**Right column:**
- Minimal structural SVG — pipeline/flow diagram, blueprint style
- No photos. No illustrations. Structural lines only.

**Motion:**
- Headline fades in up on load (Framer Motion)
- Subtext and CTA stagger in 150ms apart

---

### PROBLEM
- Background: Ink (`#0e0d0b`)
- Text: Surface (`#f5f3ef`)
- Layout: centered, max-width prose column

**Section label:** `THE CURRENT STATE` — DM Mono

**Headline (DM Serif Display):**
`Right now, your business runs on you.`

**Pain list — structured line items, not bullet points:**
```
── Leads come in from WhatsApp, calls, and DMs — and go nowhere
── Quotes get lost in chat threads and never get followed up
── Follow-ups happen when you remember, not when they should
── You have no visibility of your pipeline or open jobs
── Every decision and every job depends on your availability
```

**Closing line (Outfit, slightly larger, Coral):**
`This is not a people problem. It is a systems problem.`

---

### SOLUTION BRIDGE
- Background: Surface
- Layout: centered, short — 2–3 lines max
- No label needed. Let the copy breathe.

**Copy:**
```
Le Fond is not a web agency.

We build operational infrastructure — the systems that capture,
qualify, and convert leads while you're running a job.
```

---

### SERVICES
- Background: Surface
- Layout: 2×2 card grid
- Cards: flat, thin ink border, minimal internal padding

**Section label:** `WHAT WE BUILD` — DM Mono

**Section headline:** `Four systems. One operational backbone.`

**Cards:**

| # | Title | Description |
|---|-------|-------------|
| 01 | Lead Capture Systems | Web and WhatsApp intake — every lead logged, nothing lost |
| 02 | WhatsApp Automation | Automated qualification, follow-up, and conversion workflows |
| 03 | AI Assistants | 24/7 lead qualification and client communication — no staff required |
| 04 | Operations System | CRM, pipeline, quoting, and reporting — your business on one dashboard |

**Card anatomy:**
- Top: number label in DM Mono (`01`, `02`...)
- Title in DM Serif Display
- One-line description in Outfit
- Bottom: thin teal line accent

---

### HOW IT WORKS
- Background: Ink
- Layout: 3 steps, horizontal on desktop / stacked on mobile
- Connected by a thin line between steps

**Section label:** `THE PROCESS` — DM Mono

**Section headline:** `From discovery to running system in weeks, not months.`

**Steps:**

| # | Title | Description |
|---|-------|-------------|
| 01 | Discovery Call | We map your current operations, identify gaps, and define what needs to be built |
| 02 | Build Your System | We configure, integrate, and test your full operational stack |
| 03 | Deploy & Handover | We go live and train your team — you get full ownership |

**Motion:** Steps animate in sequentially on scroll (stagger, Framer Motion)

---

### TECH STACK
- Background: Surface
- Layout: single row or 2-row grid of text-based tags
- No logos. Technology names in DM Mono, tag style.

**Section label:** `BUILT ON` — DM Mono

**Section headline:** `Enterprise tooling. Configured for contractors.`

**Stack tags:**
`Make` · `n8n` · `WhatsApp Business API` · `Notion` · `HubSpot` · `GPT-4` · `Zapier` · `Typeform` · `Airtable`

Brief supporting line (Outfit, body):
`We use proven, best-in-class tools — not custom builds that break when you need them most.`

---

### FINAL CTA
- Background: Ink
- Layout: centered, full-width
- Minimal — headline and two buttons only

**Headline (DM Serif Display, large):**
`Your next 10 leads are already coming in.`

**Subtext (Outfit):**
`The question is whether your system is ready to capture them.`

**CTAs:**
- `[Book a Discovery Call]` — coral, filled, large
- `[WhatsApp Us]` — ghost, surface border

---

## CTA Placement Logic

| Location | CTA Type | Reasoning |
|----------|----------|-----------|
| Navbar | `Book a Call` (small, coral) | Always visible — low friction |
| Hero | Primary coral + secondary ghost | First conversion opportunity |
| Post-services | Optional inline link | Catches readers who've seen enough |
| Final section | Full dual CTA | Last chance — full commitment moment |

---

## Key Design Decisions

| Decision | Reasoning |
|----------|-----------|
| Hero headline: "You are the bottleneck." | Creates immediate recognition. Contractor reads it and thinks: *that's me.* |
| Dark problem section | Emotional contrast. Makes the pain feel weighted and real. |
| No photos or icons | Keeps industrial aesthetic. Icons cheapen the structural feel. |
| Blueprint SVG in hero | Visual interest without stock imagery |
| DM Mono for all labels and numbers | Signals precision and infrastructure — not agency work |
| Coral reserved for CTAs only | One action color. No dilution of intent. |
| Service cards numbered 01–04 | Industrial. Signals process and craft, not a menu of packages. |
| Text-only tech stack | Cleaner than logo soup. Reinforces the "built not bought" framing. |
