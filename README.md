# Math and Science Tutors (TMSA Tutoring)

A Next.js 14 + TypeScript + Tailwind website for a tutoring business.

## Run locally

```bash
npm install
npm run dev
```

## How to customize content

- Tutor cards: edit `/src/data/tutors.ts`
- Program details (price, schedule, weekly plan): edit `/src/data/program.ts`
- Contact placeholders: edit `/src/app/contact/page.tsx` and `/src/components/layout/Footer.tsx`
- Branding assets: replace `/public/logo.svg` and files in `/public/tutors/`

## Contact email setup

1. Copy `.env.example` to `.env.local`
2. Fill SMTP values (for Gmail, use an App Password in `SMTP_PASS`)
3. Restart the dev server

For Vercel, add the same variables in Project Settings -> Environment Variables.
