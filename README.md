# Chitranjan Vishwakarma | Data Analyst Portfolio

A dark, cyberpunk-styled personal portfolio for a data analyst, built with **Next.js 14 (App Router)**, **TypeScript** and **Tailwind CSS**. It features a cinematic looping video background, a draggable 3D certifications gallery and an alternating experience and education timeline.

**Live site:** https://chitranjan-portfolio-2618.netlify.app

---

## Features

- **Cinematic background:** a looping, muted video behind the whole site, with vignette, film grain, scanline overlays, a cursor-following red glow and a scroll progress bar.
- **Editorial hero:** large Oswald typography with a gradient headline, a name watermark, stat counters and magnetic call-to-action buttons.
- **3D certifications gallery:** cards arranged on a rotating cylinder. Drag with throw inertia, click a card to bring it to the front, and click the front card to open a verification modal with a SHA-256 hash.
- **Journey timeline:** work experience and education on one glowing spine, with `All`, `Work Experience` and `Education` filters.
- **Projects:** 3D tilt cards with a cursor spotlight, project image, tech stack tags and live demo links.
- **Skills:** categorised skill pills, plus a terminal-style About section.
- **Contact:** copy-to-clipboard email, social links and a form that opens a pre-filled email.
- **Polish:** smooth inertial scrolling (Lenis), custom cursor on desktop (disabled on touch devices), frosted-glass floating navbar with a sliding active pill, and responsive layouts.

## Tech stack

| Area | Tools |
|---|---|
| Framework | Next.js 14 (App Router), React 18, TypeScript |
| Styling | Tailwind CSS, custom CSS in `globals.css` |
| Animation | Framer Motion, Lenis smooth scroll |
| Fonts | Oswald, Syne, Space Grotesk, JetBrains Mono (via `next/font/google`) |

## Getting started

**Requirements:** Node.js 18.17 or newer.

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open http://localhost:3000.

```bash
# Production build and preview
npm run build
npm run start
```

> Tip: test performance with `npm run build` and `npm run start`. The dev server is slower than production.

## Project structure

```
public/
  resume.pdf                  # Download button in the hero
  projects/                   # Project card images
  video/                      # Background video
src/
  app/
    layout.tsx                # Fonts and metadata
    page.tsx                  # Page composition
    globals.css               # Design tokens and cinematic overlays
  components/
    CinematicVideo.tsx        # Looping video and overlays
    CustomCursor.tsx
    LenisProvider.tsx
    Magnetic.tsx              # Magnetic hover effect for buttons and links
    Navbar.tsx
    sections/
      Hero.tsx
      About.tsx
      Experience.tsx
      Projects.tsx
      Skills.tsx
      Certifications.tsx
      Contact.tsx
  lib/
    data.ts                   # All portfolio content lives here
```

## Customising the content

Almost everything you see on the site comes from **`src/lib/data.ts`**, so you rarely need to touch the components.

| To change | Edit in `data.ts` |
|---|---|
| Name, bio, email, links, hero stats | `profile` |
| Work experience and education | `milestones` |
| Projects | `projects` |
| Skill groups | `skillGroups` |
| Certifications | `certs` |

### Add a certification

Add a new object to `certs`:

```ts
{
  id: "c7",                        // unique
  title: "Certificate name",
  issuer: "Issuing organisation",
  color: "#a855f7",                // colour of the top laser line
  code: "SHORT-CODE",              // keep it short, it appears in a chip
  date: "2026",
  skills: ["Skill 1", "Skill 2"],
  blurb: "One or two lines about what you learned.",
},
```

The ring spaces cards automatically. About 10 cards is the practical maximum on desktop, and about 7 on mobile.

### Add an experience or education entry

Add an object to `milestones`. `type` must be exactly `"Work Experience"` or `"Education"`. Put the newest entries first, and use `active: true` only for something that is still ongoing.

### Add project images

1. Place the image in `public/projects/`.
2. Set `img` in the project object using a path that starts with `/`, for example `img: "/projects/agriculture.png"`. Do not use a Windows path such as `C:\...`.

### Replace the background video

1. Put the video in `public/video/`.
2. Update the `src` in `src/app/page.tsx`:
   ```tsx
   <CinematicVideo src="/video/your-video.mp4" />
   ```

For smooth playback, keep the video short, around 720p to 1280px wide, and compressed. Example with FFmpeg:

```bash
ffmpeg -i input.mp4 -vf scale=1280:-2 -c:v libx264 -crf 26 -preset slow -an -movflags +faststart output.mp4
```

### Replace the résumé

Overwrite `public/resume.pdf` with the new file, keeping the same name.

### Theme colours

Design tokens are defined at the top of `src/app/globals.css`:

```css
--bg: #030303; --surface: #090909;
--accent-red: #c40024; --bright-red: #e0002a; --text: #f5f5f5;
```

## Deployment

The site is a standard Next.js app and deploys to Vercel or Netlify.

1. Push the project to GitHub (do not commit `node_modules` or `.next`).
2. Import the repository in Vercel or Netlify.
3. Use the defaults: build command `npm run build`, framework Next.js.

## Performance and accessibility notes

- `overflow: hidden` is deliberately **not** used on `html` or `body`, because it breaks Lenis smooth scrolling.
- The 3D gallery uses `touch-action: pan-y`, so vertical scrolling still works on phones.
- No blur filters run inside continuous animation loops.
- The grain and pulse animations are disabled for users with `prefers-reduced-motion`.
- Large background videos can slow down weaker devices. Compress the video before deploying.

## Troubleshooting

| Problem | Fix |
|---|---|
| Project images do not show | Check that `img` starts with `/projects/...` and that the file name and extension match exactly. |
| Video does not play on mobile | Browsers only autoplay videos that are muted with `playsInline`. Both are set, but Low Power Mode on iPhones can still block it. |
| Page scrolls sideways on a phone | Look for an element wider than the screen, usually in the Certifications section. |
| Changes do not appear | Stop the server with `Ctrl + C`, run `npm run dev` again and hard refresh with `Ctrl + Shift + R`. |

## Credits

Designed and built by **Neeraj** for **Chitranjan Vishwakarma**.

- LinkedIn: https://linkedin.com/in/chitranjan-vishwakarma-429a373b5
- GitHub: https://github.com/Chitranjan-7-8-6

## License

All rights reserved. The content (text, résumé, project descriptions and images) belongs to Chitranjan Vishwakarma. Contact the owner before reusing it.
