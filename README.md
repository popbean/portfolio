# Hamad Jamal — Photography Portfolio

A minimal, responsive photography and film portfolio. It is a static website: there is no CMS, database, or subscription to maintain.

## The one file you edit

All gallery content lives in `app/content.ts`. Each photo looks like this:

```ts
{ src: "/photos/desert-sunrise.jpg", alt: "Sunrise in the desert", tags: ["Travel", "Nature"] },
```

The valid tags are: `F&B`, `Lifestyle`, `People`, `Product`, `Fashion`, `Interior`, `Travel`, `Corporate`, `Events`, and `Nature`.

## Add a photo

1. Create a folder named `photos` inside `public` if it does not exist.
2. Put the image there. Use a web-friendly JPG, WebP, or AVIF file, ideally under 2 MB.
3. Open `app/content.ts`.
4. Add one line inside the `photos` list:

```ts
{ src: "/photos/my-photo.jpg", alt: "Short private accessibility description", tags: ["People"] },
```

For a photo in several categories, add several tags:

```ts
{ src: "/photos/dinner-event.jpg", alt: "Dinner event", tags: ["F&B", "Events", "People"] },
```

Spelling and capitalization must match the valid tags exactly. The `alt` description is not shown on the page. It helps screen-reader users and appears only if an image cannot load.

To remove a photo, delete its line from `app/content.ts` and optionally delete the image file. To reorder photos manually, move their lines; the live gallery still shuffles them on every visit.

## Add a video

Video entries are also in `app/content.ts`:

```ts
{ title: "Film title", thumbnail: "/videos/film-cover.jpg", url: "https://vimeo.com/your-video" },
```

1. Create `public/videos` and put the thumbnail image there.
2. Upload the actual film to Vimeo or YouTube (recommended so the site remains fast).
3. Add the entry to the `videos` list. The page never autoplays video; clicking opens the supplied link.

## Change contact details and biography

Open `app/page.tsx` and search for the placeholder email, Instagram URL, WhatsApp number, biography, and services. Replace them with Hamad's real details. WhatsApp links use the format `https://wa.me/973XXXXXXXX` with country code and no spaces or `+` sign.

The contact form opens the visitor's email application. For form delivery that works without an email app, replace it later with a static form service such as Formspree.

## Preview on your computer

Install Node.js 22 or newer, then run:

```bash
npm install
npm run dev
```

Open the address shown in the terminal. Before publishing, check the production build with `npm run build`.

## Publish with GitHub Pages

1. Create a new repository on GitHub and upload this entire folder.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Create `.github/workflows/deploy.yml` with the workflow below, commit it, and push.
5. Open the repository's **Actions** tab. When “Deploy portfolio” finishes, the Pages address appears in **Settings → Pages**.

```yaml
name: Deploy portfolio
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

Every later push to `main` republishes the website automatically.
