# Access by design

A student digital blog for ENGR 330 on EECS accessibility failures in software and interfaces. The home page introduces the topic, links to nine project building blocks, and closes with a final synthesis. Article content and APA 7 references live in `lib/blog-content.ts`; shared article routing is in `app/pbb/[slug]/page.tsx`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000/blog](http://localhost:3000/blog) in a browser. The
app is configured with `/blog` as its base path to match the GitHub Pages URL.

## Structure

- `app/page.tsx` — landing page and connected theme index
- `app/pbb/[slug]/page.tsx` — article template, references, and article navigation
- `lib/blog-content.ts` — PBB articles and source lists
- `components/layout` — site header, footer, theme switch, mobile navigation, and skip link
- `app/globals.css` — site theme and accessibility styles
