# Website audit and redesign — 17 October 2026

## Scope and overall finding

Reviewed the local React/Vite source, all four active pages, shared navigation and footer, route handling, profile data, enquiry flow, metadata, sitemap, GitHub Pages configuration and media. Tested the redesigned local site in a browser at desktop width and at 390px and 320px mobile widths. The current project is a professional profile and contact website, not an online appointment booking system.

The original site had material correctness problems as well as a dated visual presentation. The redesign fixes the reachable functional and presentation issues described below. This is not a certification of the doctor's credentials, clinic operations, legal compliance, security, or production hosting. Original credential documents and the live hosting account were not available for verification.

## Design changes implemented

- Replaced the green/champagne theme with plum, warm ivory, coral and restrained pastel surfaces.
- Rebuilt the homepage with a stronger typographic hierarchy, portrait composition, care categories, introduction, practical FAQs and clear consultation actions.
- Rebuilt specialties around understandable patient questions, with direct links from each homepage care category.
- Rebuilt contact information and the enquiry interface, and restyled the career archive to match.
- Added a consistent botanical brand treatment, favicon, header and footer.
- Added visible keyboard focus, a skip link, labelled inputs, mobile menu state, Escape dismissal and reduced-motion support.
- Kept existing professional details as supplied, except where a source established a correction or wording was unsupported.

## Findings and disposition

| Priority | Original finding | Disposition |
| --- | --- | --- |
| Critical | Form only set local state, then claimed the enquiry was received. No request was sent or stored. | Replaced with a clearly labelled email-draft workflow. It opens the visitor's email app; the visitor must send. No website delivery or booking confirmation is claimed. |
| High | Hardcoded reviews described as verified, plus an unsupported 5.0 rating and a claim of zero postoperative pain. | Removed from the active website. No testimonials or aggregate rating are rendered. Reinstate only with authentic sources and permission. |
| High | Homepage called three items fellowships although the records list two fellowships and one short training course. | Removed the misleading numerical claim. Pain/palliative education is described as training. |
| High | Unsupported clinic timings and 24×7 emergency services. | Removed from the active contact flow and corrected the legacy ContactCard component. Visitors are asked to confirm directly. |
| High | Advanced procedures, guaranteed recovery language and palliative specialisation implied more than training alone establishes. | Reworded active specialty content around evaluation, clinical assessment, training and facility confirmation. Removed palliative care from the structured-data medicalSpecialty list; retained it under knowsAbout. |
| High | Clinical credentials claimed as verified by the website itself. | Removed the blanket verification claim from the footer. Client verification remains required. |
| Medium | Older profile URLs were silently rendered as the homepage. | Added redirects for prior profile URLs and a distinct missing-page view for unknown URLs. |
| Medium | Specialty cards had no working destination for a specific discipline. | Each links to its corresponding specialty section; lazy-loaded section scrolling is handled. |
| Medium | Same meta description across all pages. | Added route-specific descriptions and Open Graph title/description updates. |
| Medium | Sitemap listed nine obsolete routes at an unconfirmed domain. | Reduced to the four current routes using the GitHub Pages target implied by repository and deployment configuration. Actual production domain still needs confirmation. |
| Medium | Hardcoded router base could drift from Vite configuration. | Router now derives its basename from Vite. |
| Medium | Deployment used Node 20 with Vite 8. | Workflow updated to Node 24. Local production build passes on Node 24.14.0. |
| Medium | Academic cards used fixed minimum widths that could overflow narrow phones. | Corrected grids, wrapping, DOI links and mobile spacing. |
| Medium | Large images on specialty pages. | Added WebP derivatives and lazy loading for secondary images. Seven displayed assets decreased from 3,650,281 to 673,608 bytes, about 82% smaller. Original JPEG files retained. |
| Low | Generic Vite README and old visual assets. | Replaced README with project setup, deployment and enquiry behaviour documentation; old unused source remains out of the active bundle. |

## Research reference checks

1. **Bleomycin-Induced Flagellate Dermatitis: Revisited**: a public primary article record lists Himani Bhan among the authors and DOI `10.7759/cureus.29221`. Source: https://pmc.ncbi.nlm.nih.gov/articles/PMC9571210/. This verifies that author name in the reference, not the identity of the person represented by this website.
2. **Prevalence of high-risk HPV DNA in a semi-urban population of Uttarakhand, India using a point-of-care test**: publisher lists a featured poster/conference abstract in volume 33, supplement 4, A79–A80 (November 2023), with Himani Bhan among its authors. Corrected the profile's placeholder DOI to `10.1136/ijgc-2023-IGCS.123` and its type from “Original Research” to “Conference Abstract”. Source: https://www.international-journal-of-gynecological-cancer.com/article/S1048-891X%2824%2911417-X/fulltext.
3. **Ascites Due to Abdominopelvic Tuberculosis or Ovarian Malignancy?**: supplied DOI `10.48047/nq.2023.21.04.NQ20023` could not be independently retrieved in this review. Retained as a supplied profile reference with an explicit note. Obtain the publisher PDF before calling it independently verified.

Publication count therefore means three supplied references, including a conference abstract; it does not mean three verified indexed original research articles. Broad indexing claims were removed from the active introductory copy.

## Client confirmation required before release

- Verify MBBS/MD dates, fellowship certificates, exact award abbreviations FGES/FRM, training dates, employment history, thesis and presentations against original records. The source data refers to an uploaded CV, but that CV was not available in this workspace.
- Confirm the registration number and approved public professional title; no registration number was supplied or added.
- Confirm current affiliation with Geetanjali Hospital, phone, email, full address, map destination, consultation hours and booking process. Public research did not independently establish the current clinic relationship.
- Confirm which operations, imaging and fertility treatments are actually offered at this location, and which require referral.
- Confirm that portrait, hospital and conference photographs depict the intended people/locations and that the client has usage rights. Visual inspection alone does not establish authenticity. Specialty photos are labelled illustrative.
- Confirm the production domain. The repository remote is `panbhav/dr-himani`, the Vite base is `/dr-himani/`, and deployment is GitHub Pages. Sitemap/robots now follow that configuration. If `drhimani.com` is intended, update hosting, base, favicon, sitemap and SPA fallback together; see README.
- Approve the first-person introduction and new patient-facing copy as an accurate representation of the doctor's approach.

## Browser and build verification

Passed:

- Production `npm run build` on Node 24 (final build repeated after media optimisation).
- Desktop homepage visual review and working primary navigation.
- Homepage FAQ expansion.
- Care card navigation into the fertility and supportive-care sections.
- Career education, appointment and research controls, including current selected-state announcements.
- Required contact fields prevent an empty submission; invalid email keeps focus on the email field. No test enquiry was sent.
- Mobile menu expansion, contact navigation and automatic close after navigation.
- All four pages checked for horizontal overflow at 320px; mobile homepage visually inspected at 390px.
- Legacy route redirect and unknown-path missing-page behaviour.
- No browser warning/error logs were reported during the reviewed flows.
- Git whitespace/diff checks.

Limits:

- Local preview only. No changes have been pushed or deployed, and the public GitHub Pages URL could not be verified through the web tool.
- Actual email-app opening and message delivery depend on the visitor's device; end-to-end receipt was not tested. This remains a mailto workflow, with no backend.
- Phone calling, clinical scheduling, map accuracy and external DOI availability have not been tested end to end.
- No full Lighthouse/Core Web Vitals run, screen-reader audit, cross-browser matrix, dependency vulnerability assessment, penetration test or legal/regulatory review was performed.

## Remaining improvements

1. If the client needs enquiries delivered from the website, add a real server endpoint, abuse protection, a suitable privacy notice and monitored delivery/error handling. Collect only information needed for the enquiry.
2. For stronger search/social previews, add prerendered route HTML, canonical URLs, a confirmed public social-preview image, and server-level status handling. Current React metadata updates require JavaScript; many social crawlers will see only the homepage HTML. The SPA missing-page screen does not produce a server HTTP 404 on every host.
3. GitHub project Pages serves `robots.txt` under the project subpath; robots directives are recognised at an origin root. Confirm origin-level crawling configuration with the final domain and submit the sitemap in Search Console.
4. Run accessibility and performance audits against the final deployed site on real devices. The main JS bundle is about 91 KB gzipped; image loading is now substantially reduced.
5. Remove obsolete unrouted page/components and their old CSS in a separate cleanup once their content-retention needs are confirmed. They are not part of the four-page active experience.

## Follow-up requested by the client — 17 October 2026

- Added client-supplied homepage figures: **1,500+ patients treated** and **6+ years of experience**. These figures were explicitly supplied in the follow-up request; they were not independently audited against patient or employment records.
- Added **2 clinical fellowships** and **4 areas of care**, based on the existing profile and active specialty sections. No further patient volumes, success rates or ratings were invented.
- Added viewport-triggered count-up animation, introductory motion and section reveals. Animation runs once per mount; browser reduced-motion preferences are respected and live preference changes stop active counter animation. Accessible text always provides the final values without announcing every frame.
- Replaced the hero photo with the supplied `WhatsApp Image 2026-10-17 at 1.37.37 PM.jpeg`, copied into the project as `src/assets/dr-himani-hero-original.jpeg`. The source file is preserved unchanged. CSS frames a closer portrait and applies a subtle brightness/contrast adjustment; no generative facial alterations or destructive image editing were used.
- Increased patient-facing body copy to 16–18px, supporting links/buttons to 15px and most labels/captions to 12–15px. Care cards stack on phones to keep the larger text readable.
- Verified counter progression and final values in the browser; checked the revised layout at desktop, 800px, 390px and 320px widths. Production build passes.

## Client handwritten feedback applied — 17 October 2026

- Corrected the homepage introduction to use Obstetrician & Gynaecologist, Post-Doctoral Fellowships, Gynaecological Endoscopy and Clinical Training in Pain & Palliative Care Medicine, with clearer spacing and punctuation.
- Replaced the short institution strip with five complete qualification/training entries on the homepage, using the shared profile data: MBBS at PGIMS Rohtak; MD in Obstetrics & Gynaecology at AIIMS Rishikesh; Gynaecological Endoscopy fellowship at Jaipur Doorbeen Hospital, Jaipur; Reproductive Medicine fellowship at Nova Wings Hospital, Ahmedabad; and Clinical Training in Pain & Palliative Care Medicine at Tata Medical Center, Kolkata.
- Added a homepage Senior Residency panel listing PGIMS Rohtak, Cocoon Hospital Jaipur and Eternal Hospital Sanganer, Jaipur. The additional Sanganer location is retained from the existing profile.
- Aligned education and experience terminology in the shared career data.
- Applied the maternity and endoscopy wording corrections on the homepage and specialties page, including Antenatal Surveillance, High-Risk Pregnancy Management, Normal/Assisted Delivery, Postpartum Care, Hysteroscopy and Laparoscopy.
- Preserved the already-updated portrait and animated statistics.
- Production build passes. Browser checks confirmed all five qualification entries, all three senior residency hospitals, the specialty destination, a readable 390px mobile layout without horizontal overflow and no reported warning/error logs in the checked flow.

## Date-free visuals and direct enquiry delivery — 17 October 2026

- Replaced the homepage qualification list with a connected four-stage career milestone overview: medical foundation, specialist education, senior residency, and fellowships/clinical training. It retains all five qualification/training entries and all three senior residency hospitals. The stages group experience; they do not assert exact dates or a precise sequence of interleaved appointments.
- Added a three-step consultation guide to Home and Contact: contact the clinic, confirm your appointment, prepare for your visit.
- Removed exact education/employment ranges from the active Career page. Publication metadata displays years rather than full dates; underlying source records are preserved.
- Replaced the email-draft form with a direct FormSubmit JSON submission integration, as selected by the user. The current recipient is **drhimanigynae@gmail.com**, also updated in visible email links, shared profile data, structured metadata and setup documentation.
- Added validation, a honeypot, an in-flight submission lock, a 20-second timeout, cancellation on unmount, sending/success/error states and retained entries after failures. HTTP 200 alone cannot produce a success message: the service must explicitly acknowledge the submission. Activation-required responses produce an actionable error.
- FormSubmit processes enquiry data. The form links the provider's privacy policy and asks visitors not to share sensitive medical information or records. It does not offer document uploads or automatic replies. Provider acknowledgement is not an appointment confirmation or proof of inbox delivery.
- Official references: https://formsubmit.co/documentation, https://formsubmit.co/ajax-documentation and https://formsubmit.co/privacy.pdf.

### Delivery activation status

A setup request was made from the served local website after the user's selection of FormSubmit. The provider reported that inbox activation is required. After the user changed the recipient, a setup request was made for **drhimanigynae@gmail.com**, and the provider again reported activation pending. The user chose to activate it later. No patient details were used in setup requests.

**Online enquiry delivery remains pending until the inbox owner approves the FormSubmit activation email.** Do not describe it as activated or end-to-end verified. After activation and deployment, send one clearly labelled non-patient check from the production origin and verify actual inbox receipt; the provider may require confirmation for the new origin. No live patient enquiries or successful inbox delivery were verified in this work.

### Validation

- `npm test`: four passing test groups covering trimmed payloads and the updated recipient, invalid input and honeypots, provider failures and activation responses, network errors and cancellations. Tests use mocks and send no email.
- `npm run build`: passed with the final recipient and UI changes.
- Browser: desktop timeline and consultation guide visually checked; 390px mobile timeline and Contact reviewed; 320px homepage has no horizontal overflow. Four career stages and all three consultation steps are present.
- Education and Hospital Appointments views checked for absence of exact dates.
- Actual activation-pending UI checked; fields retained, submit button re-enabled, fallback email reflects the new recipient.
- Success, rate-limit, invalid JSON, rejection and network handling are verified with tests; successful live email receipt remains unverified.

## Security and production regression review — 17 October 2026

See `SECURITY_REVIEW.md` for the current review, fixes and remaining limits. This supersedes earlier statements that no dependency/security review had been performed. The npm audit reported zero known vulnerabilities; the updated tests cover seven groups. The build now generates four protected page entry files and validates sitemap consistency. Browser checks exercised the production bundle and fallback routing. Root-level robots placement, FormSubmit activation, actual inbox receipt and publication of the new changes remain outstanding; no complete-security guarantee is claimed.
