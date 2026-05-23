@AGENTS.md

STACK:
Runtime
  Node.js 24.15.0 LTS
  npm 11.13.0

Framework
  TypeScript 6.0.3
  React 19.2.6
  Next.js 16.2.6 (App Router, proxy.ts)

UI & Styling
  Tailwind CSS 4.3.0
  shadcn 4.7.0 (always use shadcn components when available)
  shadcn Data Table (for tables and lists, powered by @tanstack/react-table)
  lucide-react (icons)

Forms & Validation
  Zod 4.4.3
  zod-form-data 3.0.1
  React Hook Form 7.76.0
  @hookform/resolvers 5.2.2

Database
  PostgreSQL 18.4
  Neon (database hosting)
  Prisma ORM 7.4.2
  Prisma Decimal (always for monetary values, never Float)

Date & Time
  date-fns 4.2.1
  @date-fns/tz 1.4.1 (IANA timezone support)

Internationalization (i18n)
  next-intl 4.12.0

Authentication & Authorization
  next-auth@beta (Auth.js v5)
  @auth/prisma-adapter
  @casl/ability 6.8.0 (RBAC + ABAC)
  @casl/prisma (Prisma integration, WHERE filters)

Transactional Email
  resend 6.12.3
  react-email 6.0
  @react-email/ui

PDF Generation
  @react-pdf/renderer 4.5.1 (server-side via renderToBuffer)

Background Jobs & Cron
  Inngest (primary — event-driven workflows, retries, observability)
  Vercel Cron Jobs (fallback for simple scheduled tasks)

Testing
  Vitest 4.1.7

Hosting & Storage
  Vercel (hosting)
  @vercel/blob 2.4.0 (file upload and storage)
