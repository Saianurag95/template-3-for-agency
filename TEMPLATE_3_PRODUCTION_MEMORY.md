# Template 3 Production Memory

This repo is Template 3: `AG-LEAD-03`.

Use the central production memory files here:

```text
C:\Users\reddy\Documents\New project\website-production-os\templates\agency\agency-leadgen-pro-01\site-production-memory.md
C:\Users\reddy\Documents\New project\website-production-os\templates\agency\agency-leadgen-pro-01\client-change-request-format.md
C:\Users\reddy\Documents\New project\website-production-os\templates\agency\agency-leadgen-pro-01\one-to-two-hour-customization-sop.md
C:\Users\reddy\Documents\New project\website-production-os\templates\agency\agency-leadgen-pro-01\template-3-complete-code-snapshot.md
```

Quick facts:

- `/` is the main lead-generation agency website.
- `/intake` is the client information retrieval page.
- Main data file is `src/data/index.ts`.
- Home route is `src/pages/HomePage.tsx`.
- Intake shell is `src/pages/IntakePage.tsx`.
- Intake steps live in `src/pages/intake/`.
- This template uses `react-router-dom`.
- Keep serious CTAs linked to `/intake`.
- Keep Vercel rewrite in `vercel.json`.

Verify after changes:

```text
npm.cmd run typecheck
npm.cmd run build
```

