# AECSA Eye Clinic — Homepage (Next.js)

Single-page website built with **Next.js 16, React 19, Tailwind CSS 4, shadcn/ui and Framer Motion** (animations, scroll reveals, smooth-scroll navigation).

---

## Run it in VS Code (step by step)

### 1. Install the requirements
- **Node.js 20 or newer** (LTS recommended): https://nodejs.org
  - Check it works: open a terminal and run `node -v` and `npm -v`
- **VS Code**: https://code.visualstudio.com
- Recommended VS Code extensions (install from the Extensions panel):
  - **ESLint** (dbaeumer.vscode-eslint)
  - **Tailwind CSS IntelliSense** (bradlc.vscode-tailwindcss)
  - **Prettier** (esbenp.prettier-vscode) — optional

### 2. Open the project
1. Unzip `aecsa-website.zip` to a folder, e.g. `Documents/aecsa-website`
2. In VS Code: **File → Open Folder…** and select that folder
3. Open the built-in terminal: **Terminal → New Terminal** (or `` Ctrl+` ``)

### 3. Install dependencies (one time)
```bash
npm install
```
This takes 1–3 minutes and creates the `node_modules` folder.

### 4. Start the dev server
```bash
npm run dev
```
Then open **http://localhost:3000** in your browser.
The page auto-reloads every time you save a file.

### 5. Build for production (optional)
```bash
npm run build
npm run start
```

---

## Where to edit things

| What you want to change | File |
| --- | --- |
| Page sections & order | `src/app/page.tsx` |
| Hero (top banner) | `src/components/site/hero.tsx` |
| About / surgeon section | `src/components/site/about.tsx` |
| Services list | `src/components/site/services.tsx` |
| Why us / facilities / conditions | `src/components/site/why-us.tsx`, `facilities.tsx`, `conditions.tsx` |
| Testimonials | `src/components/site/testimonials.tsx` |
| Contact form & details | `src/components/site/contact.tsx` |
| Header / nav / footer | `src/components/site/site-header.tsx`, `site-footer.tsx` |
| Animations (reveal effects) | `src/components/site/reveal.tsx`, `motion-primitives.tsx` |
| **Clinic name, phone, address, WhatsApp, hours** | `src/lib/site.ts` |
| Colors / theme | `src/app/globals.css` (CSS variables) |
| Images | `public/` folder |

The whole site content (phone numbers, address, social links) lives in
**`src/lib/site.ts`** — edit that one file to update business details everywhere.

> Note: the database (Prisma) files are part of the starter template but the
> homepage does not use them — you can safely ignore the `prisma/` folder.

## Troubleshooting
- **`npm not recognized`** → install Node.js and restart VS Code.
- **Port 3000 already in use** → run `npm run dev -- -p 3001` and open http://localhost:3001
- **Install errors on Windows** → delete `node_modules` and `package-lock.json`, then run `npm install` again.
