# Sea of Thieves Treasure Guide

A static reference app listing every treasure item in Sea of Thieves with gold values, best company, and emissary grade multipliers.

## Requirements

- Node.js 18 or newer (`node --version` to check)
- npm (comes with Node.js)

## Setup — do this once

```bash
npm install
```

## Option A: Dev server (simplest, with live reload)

```bash
npm start
```

Open `http://<your-pi-ip>:5173` in any browser on the same network.

## Option B: Build once, then serve (better for always-on hosting)

```bash
npm run build
npm run preview
```

Open `http://<your-pi-ip>:4173` in any browser on the same network.

## Option C: Use npx serve (after building)

```bash
npm run build
npx serve dist
```

A `serve.json` file is included so that routes work correctly.  
Open the URL that `npx serve` prints — usually `http://localhost:3000`.

---

**Tip:** to find your Pi's IP address, run `hostname -I` on the Pi.
