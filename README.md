# NEXORA CREATIVE

A fresh Next.js + React + TypeScript + Tailwind CSS starter for a professional digital creative agency.

## Included in this stage
- Responsive dark premium public website
- NEXORA CREATIVE wordmark and navigation
- Homepage sections, service directory and 15 service detail pages
- Indicative INR pricing
- Portfolio concepts clearly marked as demonstrations
- Contact inquiry form with client-side validation and browser-local demo storage
- Client dashboard and admin placeholders that explicitly do **not** claim to be secure/authenticated
- SEO metadata, robots and sitemap routes
- Draft Privacy Policy and Terms pages
- GitHub Pages static export configuration

## Requirements
- Node.js 20.9+ (Node.js 22 LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Build static output
```bash
npm run build
```
The static site is written to `out/`.

## Deploying to GitHub Pages
1. Create/use a repository for this project.
2. If the site is published under a repository subpath (for example `https://USER.github.io/REPO/`), set `basePath: "/REPO"` in `next.config.ts` and set `NEXT_PUBLIC_SITE_URL` to the deployed base URL. Verify asset and navigation paths after build.
3. Push source code to GitHub.
4. Add a GitHub Actions workflow that runs `npm ci`, `npm run build`, and publishes the `out/` directory using GitHub Pages artifacts.
5. In repository Settings → Pages, choose GitHub Actions as the source.

GitHub Pages is static hosting. It cannot securely host Next.js server actions, API routes, server-side authentication, secret keys, payment verification, protected uploads or a private admin API.

## Production features still requiring external backend configuration
Do not treat the dashboard pages as production-ready authentication. For real client data, configure:
- **Authentication/database/storage:** Supabase (Auth + Postgres + Storage) or a comparable managed service. Enable row-level security and verify every access policy. Never expose the service-role key.
- **Backend/server:** Deploy private operations on a server-capable host (for example a compatible Next.js host or serverless functions). Keep secrets in server-side environment variables.
- **Payments:** Razorpay test mode first. Create orders on the server, verify signatures server-side, verify webhook signatures, and update invoice/payment status only after verification.
- **PDF invoices:** Generate PDFs server-side or use a trusted PDF library in a server function; do not trust client-submitted totals.
- **Email/notifications:** Configure a transactional email provider and protect its API key on the server.
- **Rate limiting, uploads and audit trail:** Add server-side rate limits, file type/size scanning, signed upload URLs and admin audit logs.

## Important current limitations
- Contact form submissions are saved in local storage on the visitor's device only. They are not transmitted to the business.
- Client/admin dashboards are explanatory placeholders, not authenticated portals.
- No payment gateway is connected; no real payment can be accepted.
- Portfolio entries are demo concepts, not client work.
- Example URL values in metadata, sitemap and robots must be updated before production.
- Privacy and terms pages are drafts and should be reviewed for the actual business setup.

## Suggested build stages
1. Public website (included)
2. Managed auth + database schema and row-level security
3. Client project request persistence, status tracking and messaging
4. Admin tools and server-side permissions
5. Quotations, PDF invoices and payment reconciliation
6. Uploads, email notifications, audit logging and production tests

## Security checklist before production
- [ ] Verify authentication and admin roles on the server, not just in the UI
- [ ] Enable and test database row-level security
- [ ] Store no secrets in `NEXT_PUBLIC_*` variables
- [ ] Verify payment signatures and webhooks on the server
- [ ] Calculate invoice totals and taxes on the server
- [ ] Validate file size/type and use private storage
- [ ] Add rate limiting, monitoring, backups and retention rules
- [ ] Update legal pages and replace example domain values
