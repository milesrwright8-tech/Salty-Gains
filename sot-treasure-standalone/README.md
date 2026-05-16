# Sea of Thieves Treasure Guide

A static reference app listing every treasure item in Sea of Thieves with base gold values, best company to sell to, and emissary grade multipliers (I–V).

## Requirements

- Node.js 18 or newer
- npm (comes with Node.js)

## Setup

```bash
npm install
```

## Development (live-reload server)

```bash
npm run dev
```

Then open `http://<your-pi-ip>:5173` in a browser on any device on the same network.

## Production build + serve

```bash
npm run build
npm run preview
```

Then open `http://<your-pi-ip>:4173` in a browser.

The `preview` command serves the optimised production build and listens on all interfaces so any device on your network can reach it.

## Optional: serve with nginx or another static server

After `npm run build` the output is in the `dist/` folder — plain HTML/CSS/JS files.  
You can point nginx, Caddy, or any static file server at that folder instead of using `npm run preview`.
