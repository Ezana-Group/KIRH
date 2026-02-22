# KIRH Static Website (cPanel Ready)

This folder contains a **static** version of the Kenya Industrial Research Homes website. No Node.js, no build step—just HTML, CSS, and JavaScript. You can upload it to any cPanel hosting (or any static host) and it will work as-is.

## What’s included

- **HTML pages**: `index.html`, `about.html`, `services.html`, `empowerment.html`, `impact.html`, `contact.html`, `get-support.html`, `partner.html`, `privacy.html`, `terms.html`, `accessibility.html`
- **CSS**: `css/custom.css` – theme colors (primary, secondary, warm), fonts (Inter, Poppins), and component classes. Used with **Tailwind CSS CDN** in each page.
- **JS**: `js/main.js` – mobile nav, scroll header, contact/get-support/partner forms (mailto fallback), stats counter, team modals.
- **Images**: Put your logo at `images/kirh-logo.png`. Hero/content images use Pexels URLs (no local image files required).

## Look and feel

The design matches the main Next.js site: same colors, typography, sections, and layout. Tailwind is loaded via CDN; custom theme and components are in `css/custom.css`.

## How to upload to cPanel

1. **Zip the Static folder**  
   Zip the contents so that the **root of the zip** has `index.html`, `css/`, `js/`, `images/` (e.g. not a single “Static” folder at root unless that’s your public folder).

2. **Upload and extract**  
   In cPanel → File Manager, go to `public_html` (or your domain’s document root). Upload the zip and extract. You should see:
   - `index.html`
   - `about.html`, `services.html`, etc.
   - `css/custom.css`
   - `js/main.js`
   - `images/` (add `kirh-logo.png` here if you have one)

3. **Optional: logo**  
   Copy `kirh-logo.png` from your main project’s `public/images/` into `Static/images/`. If the file is missing, the header still shows “KIRH” text.

4. **Forms (contact, get-support, partner)**  
   There is no server-side form handler. On submit, the script opens the user’s email client (mailto) with the form data pre-filled so they can send the message to KIRH. For server-side handling later, you’d replace this with a form action or API endpoint.

## File structure (after upload)

```
public_html/
  index.html
  about.html
  services.html
  empowerment.html
  impact.html
  contact.html
  get-support.html
  partner.html
  privacy.html
  terms.html
  accessibility.html
  css/
    custom.css
  js/
    main.js
  images/
    kirh-logo.png   (optional)
```

## Notes

- All internal links use `.html` (e.g. `about.html`, `get-support.html`) so they work on static hosting.
- Tailwind is loaded from `https://cdn.tailwindcss.com`; the site needs internet access for Tailwind and Google Fonts.
- If you have an old Next.js export in the same folder (e.g. `_next/`, `static/`), you can delete those; this static build does not use them.
