# meitate-osu.github.io

This repository hosts the **Access by Design** student blog at
[https://meitate-osu.github.io/blog](https://meitate-osu.github.io/blog).

## Publish the site

GitHub Actions builds the static blog and publishes it to GitHub Pages whenever
changes are pushed to `main`. To enable it, open the repository's **Settings →
Pages** and set **Build and deployment → Source** to **GitHub Actions**. The
workflow is in `.github/workflows/deploy.yml`.

## Work on the blog

The Next.js app lives in [`blog/`](blog/). To run it locally:

```sh
cd blog
npm ci
npm run dev
```

Open [http://localhost:3000/blog](http://localhost:3000/blog). Update article
content in `blog/lib/blog-content.ts`; add images and other public assets under
`blog/public/`. The app uses a `/blog` base path and static export for GitHub
Pages, so it has no server-side runtime or database.
