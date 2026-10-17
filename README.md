# Dr. Himani website

React 19 / Vite 8 website for Dr. Himani's professional profile and consultation enquiries.

## Local development

Use Node.js 24 LTS, then run `npm ci` and `npm run dev`.
Open http://localhost:5173/dr-himani/.

`npm run build` produces `dist/`. `npm run preview` serves that build locally.

## Pages and contact behaviour

The four primary routes are `/`, `/specialties`, `/career`, and `/contact` under the `/dr-himani/` base path. Older profile routes redirect to the relevant current page. Unknown paths show a missing-page view.

The enquiry form opens a populated `mailto:` draft. It does not send, store, or confirm receipt of enquiries. The visitor must send from an email application, and the clinic confirms appointments directly. A server endpoint and delivery monitoring are needed for website-based message delivery.

## Deployment

The existing GitHub Actions workflow builds on Node.js 24 and publishes `dist/` to GitHub Pages when `main` is pushed. The configured repository target is `https://panbhav.github.io/dr-himani/`; live deployment has not been verified in this redesign task.

Before changing to a custom domain, update Vite's `base`, favicon path, sitemap URLs, robots sitemap location, and `public/404.html`'s `pathSegmentsToKeep` (use `0` at a domain root). The router derives its base from Vite.

## Content review

Read [WEBSITE_AUDIT.md](WEBSITE_AUDIT.md) before release. Profile data is in `src/data/doctor.js`. Qualifications, dates, contact details, facilities and photograph provenance need client approval against original records. No star ratings or testimonials are currently displayed.
