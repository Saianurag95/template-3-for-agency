# Agency Template QA Checklist

Use this after Bolt generates each frontend.

## Business Checks

- [ ] Agency can clearly sell website services from this page.
- [ ] Website/demo showcase is visible.
- [ ] Packages are visible.
- [ ] Package prices are demo Indian pricing: Rs 6,000, Rs 8,000, Rs 12,000.
- [ ] Delivery timelines are 1, 2 and 3 business days.
- [ ] Consultation/WhatsApp CTA is visible.
- [ ] Lead/contact form exists.
- [ ] A separate `/intake` page exists.
- [ ] Main conversion CTAs route to `/intake`.
- [ ] No backend/login/CRM was created.

## Visual Difference Checks

- [ ] This template looks clearly different from the other 9.
- [ ] Hero layout is not the same as the previous template.
- [ ] Color system matches the niche.
- [ ] Section rhythm is distinct.
- [ ] Demo showcase style is niche-appropriate.
- [ ] Package section does not look identical to all others.

## Technical Checks

- [ ] Mobile responsive.
- [ ] No lorem ipsum.
- [ ] No broken internal links.
- [ ] `/` loads the main agency website.
- [ ] `/intake` loads the information retrieval page.
- [ ] Vercel rewrite exists if using a single-page app.
- [ ] Icons are imported from `lucide-react`.
- [ ] Placeholder content is easy to replace.
- [ ] Files are easy to export into the template source folder.
- [ ] Can deploy on Vercel as static frontend.

## Intake Page Checks

- [ ] Intake page has Business Information.
- [ ] Intake page has Website Requirements.
- [ ] Intake page has Template Selection.
- [ ] Intake page has Template ID.
- [ ] Intake page has Brand Information.
- [ ] Intake page has Content Submission.
- [ ] Intake page has Media Uploads.
- [ ] Intake page has Credentials.
- [ ] Intake page has SEO Information.
- [ ] Intake page has Package Selection.
- [ ] Intake page has Payment Section.
- [ ] Intake page has Final Review.
- [ ] Save and Continue is disabled until required fields are complete.
- [ ] Missing required fields are listed clearly.

## Fast-Track Scope Checks

- [ ] No custom dashboard.
- [ ] No payment system.
- [ ] No login.
- [ ] No database dependency.
- [ ] No complex animation requiring custom engineering.

## Save Location

After accepting the Bolt output, save it here:

```text
website-production-os/templates/agency/<template-id>/source
```
