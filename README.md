# Under Construction (Next.js)

Next.js "Under Construction" page with a persistent 24-hour countdown timer.

## Files

- `app/page.js` - page UI + timer logic (uses `localStorage`)
- `app/page.module.css` - styles
- `app/layout.js` + `app/globals.css` - fonts + global styles

## Run locally

```bash
npm run dev
```

## Deploy on Vercel

- Import the GitHub repo into Vercel.
- Vercel auto-detects Next.js and deploys it.

## Push to GitHub

If git identity is not set yet:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Then push:

```bash
git add .
git commit -m "Convert to Next.js under construction page"
git branch -M main
git remote add origin https://github.com/Drrbarns/websiteconstruction-.git
git push -u origin main
```
