# Le Fond website preview

The approved strategic direction is implemented in the existing Next.js 14 application. The package lock, domain and hosting configuration are preserved. No credentials, external form handlers or analytics integrations were present in the inspected source. Hosting-level analytics cannot be verified here.

## Review

- Home: `/` — lead generation, funnels and follow-up, organised around Capture / Convert / Follow Through.
- Commerce: `/commerce` — the secondary Commerce Growth offer.
- About: `/about`; Contact: `/contact`; preview legal information: `/privacy` and `/terms`.
- Dark and light themes use the original logo and DM Sans. The theme control remembers the chosen mode locally. Dark uses black, white and greys; light uses white, dark typography and blue.
- The interactive six-stage workflow adapts to solar, dental, plumbing and B2B examples. It includes local example booking choices, finite playback, reduced-motion support and explicit example labels.
- AI examples show routine replies and human escalation. The optional dashboard concept includes pipeline, approvals and reporting views, with simulated actions only.
- Booking, audit, WhatsApp and email open accessible placeholder dialogs. These destinations are configured centrally in `lib/contact.js`.
- The enquiry form validates required fields locally and explicitly reports that nothing was sent. It does not persist input.
- The enquiry demonstration uses fictional workflow states labelled Example; no client results are claimed.
- SEO titles, descriptions, canonical links, social metadata, language and minimal Organization structured data are configured. Search indexing is disabled for the preview.

## Run locally

Run `npm ci`, then `npm run dev -- --port 4317`. Production validation uses `npm run build`; preview that build with `npm run start -- --port 4317`. Do not run development and production builds concurrently against the same `.next` directory.

## Before launch

1. Add verified booking, audit and WhatsApp URLs and the business email in `lib/contact.js`.
2. Connect the enquiry form to the approved delivery destination, implement server validation and abuse protection, and add the appropriate privacy notice before collecting customer data.
3. Confirm VAT treatment, package scope, support terms and fees.
4. Add case studies only when results are substantiated and client permission is available. The current example workflows must not be presented as client results.
5. Remove preview notices and switch the `robots` metadata to indexable only for the approved live release.
6. Finalise business-specific privacy and terms information, including the confirmed service providers, data handling and contract terms.
7. Verify booking completion, WhatsApp destination, form delivery and production analytics end to end.

Original section components remain in source for reference but are no longer imported by the active routes. `GrowthPages.js`, `Workflow.js` and the shared contact components provide the new pages. Existing `#results` and `#case-study` anchors resolve to the labelled dashboard concept. No GitHub push or live deployment is included in this local preview.
