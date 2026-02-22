# Deploying KIRH Website to cPanel

This guide covers deploying the Next.js app to a cPanel host with Node.js support (e.g. "Setup Node.js App" or similar).

## Prerequisites

- cPanel account with **Node.js** support enabled
- Your domain (e.g. kirh.co.ke) pointed to the hosting
- Resend API key for form emails (see [.env.example](.env.example))

---

## Option A: Deploy from GitHub (recommended)

1. **In cPanel**, open **Setup Node.js App** (or "Node.js Selector" / "Application Manager" depending on your host).

2. **Create a new application**
   - Node version: **18** or **20** (LTS)
   - Application root: e.g. `kirh` or `public_html/kirh` (so the app lives in its own folder)
   - Application URL: your domain or subdomain (e.g. `kirh.co.ke` or `www.kirh.co.ke`)

3. **Clone the repo** into the application root:
   - SSH into the server, or use cPanel **Terminal** / **Git Version Control**.
   - In the folder you set as application root, run:
   ```bash
   git clone -b Production https://github.com/Ezana-Group/KIRH.git .
   ```
   (The `.` clones into the current directory; create an empty folder first if needed.)

4. **Install dependencies and build**
   - In the same folder:
   ```bash
   npm install
   npm run build
   ```

5. **Environment variables**
   - In cPanel’s Node.js app settings, add **Environment Variables** (or create a `.env` file in the app root, **never commit this**):
   - `RESEND_API_KEY` = your Resend API key
   - Optional: `RESEND_FROM` = e.g. `KIRH Website <noreply@kirh.co.ke>` (after verifying domain in Resend)

6. **Start command**
   - Application startup file / run script: set to **Start** the app.
   - **If cPanel asks for a startup file**, use the project’s **`server.js`** (in the app root):
   ```bash
   node server.js
   ```
   - Otherwise use either:
   ```bash
   npm start
   ```
   - Or: `node node_modules/next/dist/bin/next start` (with working directory = app root).

7. **Port and URL**
   - Note the port cPanel assigns (e.g. 3000 or a random port). Point your domain to this app (cPanel usually has “Add port” or “Connect domain to app”).

8. **Restart the Node app** from cPanel after any code or env changes.

---

## Option B: Upload built project (no GitHub on server)

1. **On your computer**, build the app:
   ```bash
   npm install
   npm run build
   ```

2. **Upload** (FTP/File Manager) the **entire project** to the server (e.g. into `kirh` or your chosen app root), **except**:
   - Do **not** upload `node_modules` (reinstall on server)
   - Do **not** upload `.env.local` (use env vars or `.env` on server only)

3. **On the server** (SSH or cPanel Terminal), in the app folder:
   ```bash
   npm install --production
   npm run build
   ```
   (If you already built locally, you can upload `.next` and run only `npm install --production` and `npm start`; some hosts prefer a fresh `npm run build` on the server.)

4. In cPanel **Setup Node.js App**, create an app pointing to this folder, set **Start** command to `npm start`, add `RESEND_API_KEY` (and optional `RESEND_FROM`) as environment variables, then start the app and connect your domain.

---

## Checklist before going live

- [ ] `RESEND_API_KEY` set on server (so Contact / Get Support / Partner forms send to info@, support@, partner@)
- [ ] Domain/subdomain pointed to the Node app and correct port
- [ ] HTTPS enabled (cPanel “SSL/TLS” or “Let’s Encrypt”)
- [ ] Test Contact, Get Support, and Partner forms and confirm emails arrive

---

## Troubleshooting

- **App not loading**: Check Node version (18+), that `npm run build` completed, and that the start command is `npm start` with working directory = app root.
- **Forms don’t send email**: Verify `RESEND_API_KEY` (and optional `RESEND_FROM`) in the Node app’s environment; restart the app after changing env vars.
- **502 / Bad Gateway**: Ensure the Node app is running and the domain is correctly pointed to the app’s port.
