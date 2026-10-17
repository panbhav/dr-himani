# Security and regression review — 17 October 2026

## Result

No known dependency vulnerabilities were reported by `npm audit --json` across production and development dependencies. A source pattern scan of 70 text/code/configuration files found no candidates for the private-key, AWS access-key, GitHub-token and OpenAI-key formats checked. Review of the active React pages found no `dangerouslySetInnerHTML`, `eval`, `new Function`, user-generated HTML injection, patient-data browser storage or credential-bearing fetches.

This is a bounded source/dependency/configuration review and local production regression check. It is not a penetration test, a guarantee of security, a full Git-history secret audit, a review of FormSubmit's infrastructure, or evidence that the latest local changes are deployed.

## Findings addressed locally

| Finding | Change and verification |
| --- | --- |
| No explicit production Content Security Policy | The postbuild step adds a meta CSP to all four primary page entry files. Executable scripts are restricted to the same origin, with no `unsafe-inline` or `unsafe-eval` script allowance. Connections are restricted to the same origin and FormSubmit; fonts/styles have explicit Google Fonts allowances; objects, frames and base elements are blocked. Production browser checks reported no policy violations. |
| Inline legacy redirect code | Moved restore logic into the application bundle and the 404 redirect into a same-origin script. Added origin/project-path checks, malformed-path handling and automated route/query/hash round-trip tests. |
| Inner pages depended on a GitHub 404 redirect | Build now emits `specialties/index.html`, `career/index.html` and `contact/index.html`, each with its own static title, description and canonical URL. All four local production page URLs returned HTTP 200. These are HTML entry files; the page body still requires React/JavaScript. |
| Route and sitemap metadata could drift | Added one shared public page metadata source and build-time sitemap consistency checks. Canonical route URLs use trailing slashes to match the directory entries. Browser metadata handles slash/no-slash route variants. |
| Unknown pages could keep homepage metadata | Unknown routes get `noindex, follow`, a missing-page title, and no canonical URL. The 404 HTML itself also has noindex and a restrictive CSP. Browser-checked both the 404 redirect and a legacy specialty deep link. |
| Router stripped the home path's trailing slash | Preserved the Vite basename's trailing slash so Home links point to the project directory URL and refresh consistently. |
| Form provider could return malformed JSON values | Reject null, arrays, unexpected response types and missing acknowledgements. Reject control characters in name, phone and email, and invalid message controls. Added regression cases. |
| Build jobs had deployment permissions | Split build and deploy jobs. Build receives read-only repository permission; deployment receives Pages/OIDC permissions only. Checkout no longer persists credentials. Added job time limits. |
| Actions referenced mutable major tags | Pinned all five official actions to full commit SHAs retrieved from their official GitHub release-tag references during this review. |
| No future advisory gate in CI | Added `npm audit --audit-level=high`; known high/critical advisories will stop deployment. Tests also run before the build. |
| Local secrets were not explicitly ignored | Added ignore patterns for `.env`, `.env.*` (except `.env.example`), `.pem` and `.key`. Ignore rules do not remove previously committed secrets; no such tracked files were identified in the reviewed current tree. |

## Production build and functional checks

- `npm run build`: passed, including postbuild checks for four page entry files, CSP, titles/descriptions/canonical URLs, HTML asset references, sitemap, robots URL and 404 assets.
- `npm test`: seven passing groups covering enquiry payload/recipient validation, invalid input and honeypots, provider errors/activation states, network cancellation, legacy deep-link restoration, the 404 redirect round trip, and sitemap/route consistency.
- Browser checked the actual production bundle, not just the development server: Home, Specialties, Career and Contact rendered with a single H1 each, correct canonical metadata, no failed completed images and no new-tab links lacking `noopener` or `noreferrer` in the checked pages.
- Empty form submission was blocked and focused the required name field. No new valid enquiry or activation email was sent during this security review; the user previously chose to activate FormSubmit later.
- Legacy specialty link retained its target section and returned `index, follow`. The missing-page route had `noindex, follow` and no canonical URL.
- No browser warning/error messages appeared in the reviewed production flows.
- Mobile layout testing from the preceding implementation covered 390px and 320px; this review's changes primarily affect metadata, routing, form validation and build configuration. This is not a complete browser/device matrix.
- `git diff --check`: passed. The GitHub workflow was source-reviewed; it has not been executed on GitHub during this task. A local YAML parser was unavailable.

## Passive checks of the currently published site

Read-only GETs returned:

| URL | Result |
| --- | --- |
| `https://panbhav.github.io/dr-himani/` | HTTP 200, HTTPS, HSTS header present |
| `https://panbhav.github.io/dr-himani/sitemap.xml` | HTTP 200, XML, four primary routes |
| `https://panbhav.github.io/dr-himani/robots.txt` | HTTP 200, plain text, sitemap declaration present |
| `https://panbhav.github.io/robots.txt` | HTTP 404 |

The published project responses did not include a CSP HTTP header, X-Frame-Options or X-Content-Type-Options in the sampled responses. HSTS was `max-age=31556952` on the project responses. These are observations of the current public deployment, not claims about new local code. The new meta CSP and generated page entry files still need deployment.

## Remaining limits and release actions

1. **Enquiry activation:** approve FormSubmit's activation email at `drhimanigynae@gmail.com`. After deployment, verify one clearly labelled non-patient enquiry from the production origin and confirm actual inbox receipt. A provider acknowledgement alone is not proof of delivery. This remains pending by the user's choice.
2. **robots.txt placement:** the project file exists, but crawlers read robots.txt at the origin root. To make its rules effective, add the root file through the account's root Pages repository or the final custom domain's root. Missing root robots.txt does not itself block crawling. Submit the sitemap through Search Console. This project cannot publish into a different root repository as part of its normal build.
3. **HTTP headers:** the meta CSP provides useful script restrictions, but `frame-ancestors` and X-Frame-Options clickjacking controls require response headers. The reviewed live responses also lacked `nosniff`. Configure these through hosting/proxy infrastructure that supports them if required; an ignored `_headers` file is not a fix on GitHub Pages. Inline styles remain permitted for React style attributes, so this is not a fully strict style policy.
4. **Spam and service dependence:** the public FormSubmit endpoint is intentionally callable without a secret. Client-side validation and the honeypot are bypassable; provider-side filtering/availability and mailbox monitoring remain necessary. For stronger abuse controls or sensitive information, use a dedicated backend with appropriate retention/access controls. The current form instructs visitors not to send medical records or sensitive health information.
5. **External dependencies:** Google Fonts and FormSubmit remain external services. No remote analytics or advertising scripts were added. Maintain dependency/action pins and review updates; an empty npm advisory report does not establish that all dependencies are safe.
6. **Content and infrastructure:** credential/statistic accuracy, clinical service availability, account access, DNS ownership and clinic workflows were not independently certified by this review.

## Reference material

- Google robots.txt location rules: https://developers.google.com/crawling/docs/robots-txt/create-robots-txt
- MDN CSP reference and meta limitations: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy
- GitHub Actions security guidance: https://docs.github.com/en/actions/reference/security/secure-use
- Official action SHA references were read from the GitHub API at `https://api.github.com/repos/actions/<action>/git/ref/tags/<tag>` for checkout v4, setup-node v4, configure-pages v4, upload-pages-artifact v3 and deploy-pages v4.
