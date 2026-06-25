# AlgoGrit — Landing Page

Personal landing page and portfolio for Gaurav Agarwal ([@codermana](https://youtube.com/@codermana)), served at [algogrit.com](https://algogrit.com).

Built with [Astro](https://astro.build), [React](https://react.dev) islands, and [Tailwind CSS v4](https://tailwindcss.com). Deployed on Netlify.

## 🧱 Stack

- **Astro 5** — static site generation, `.astro` components for the mostly-static sections.
- **React 19** — interactive islands (`Navbar`, `Talks`, `RecentWritings`, `BlogPosts`) hydrated with `client:load` / `client:visible`.
- **Tailwind CSS v4** — via the `@tailwindcss/vite` plugin (no `tailwind.config`; theme lives in `src/styles/global.css`).
- **YouTube Data API v3** — powers the Talks section (see [Environment](#-environment)).

## 🗂️ Project Structure

```text
/
├── public/
│   ├── assets/images/skills/   # tech-stack logos rendered by Skills
│   ├── Gaurav.jpeg
│   └── favicon.*
├── src/
│   ├── components/             # Hero, About, Experience, Skills, Talks, Contact, …
│   ├── data/                   # community.ts, education.ts, experience.ts, skills.ts
│   ├── layouts/Layout.astro    # shared <head>, aurora background
│   ├── pages/
│   │   ├── index.astro         # the landing page (composes all sections)
│   │   └── resume.astro        # /resume
│   └── styles/global.css       # Tailwind entry + theme tokens
├── astro.config.mjs            # site=algogrit.com, react + tailwind integrations
└── netlify.toml                # build + resume.algogrit.com → /resume redirect
```

The landing page is assembled in `src/pages/index.astro` from section components: Hero, Stats, About, Expertise, Experience, Skills, Talks, Community, RecentWritings, ResumeCTA, Contact, Footer.

## 🧞 Commands

Run from the project root:

| Command         | Action                                        |
| :-------------- | :-------------------------------------------- |
| `pnpm install`  | Install dependencies                          |
| `pnpm dev`      | Start the dev server at `localhost:4321`      |
| `pnpm build`    | Build the production site to `./dist/`        |
| `pnpm preview`  | Preview the production build locally          |
| `pnpm astro …`  | Run Astro CLI commands (`astro add`, `check`) |

## 🔑 Environment

Copy `.env.example` to `.env` and fill in the values:

- `PUBLIC_YOUTUBE_API_KEY` — YouTube Data API v3 key used client-side by the Talks section. Because Astro inlines `PUBLIC_`-prefixed vars into the bundle, this key **ships to the browser and is not secret** — restrict it in the Google Cloud console (HTTP referrers → `algogrit.com`, API → YouTube Data API v3 only). Without a key, Talks gracefully degrades to channel/playlist links.
- `PUBLIC_TALKS_PLAYLIST_ID` / `PUBLIC_CODERMANA_HANDLE` — optional overrides; defaults are baked into `Talks.tsx`.

## 🚀 Deployment

Hosted on Netlify (`netlify.toml`): builds with `npm run build`, publishes `dist/`. The `resume.algogrit.com` subdomain 302-redirects to `algogrit.com/resume`.
