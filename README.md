# For Escriva — A Cinematic Tribute Site

A dark, editorial love letter built with Next.js 14, Framer Motion, and Tailwind CSS.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Personalize it (do this tonight!)

Everything lives in **`src/data/content.ts`**:

| What | Where |
|------|--------|
| Her name, tagline, birthday date | `siteConfig` |
| Timeline milestones | `timeline` |
| 50 reasons you love her | `reasons` |
| Love letter | `letter` |
| Spotify songs | `songs` (replace embed URLs) |
| Personality traits | `traits` |

## Add your photos & videos

Drop files into `public/media/`:

```
public/media/
  photos/
    universe.jpg      ← big editorial photo (Section 02)
    timeline-1.jpg    ← timeline thumbnails
    moment-1.jpg      ← gallery photos
  videos/
    hero-1.mp4        ← hero crossfade (3 videos)
    hero-2.mp4
    hero-3.mp4
    countdown.mp4     ← ambient background (Section 08)
```

Until you add your own files, the site uses placeholder stock media automatically.

## Deploy to Vercel (free)

1. Push to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Deploy — done in ~2 minutes

Or run locally and share your network URL for a private preview.

---

Happy 19th birthday, Escriva. ♥
