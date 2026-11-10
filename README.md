# Rahul Rathod portfolio

An Astro portfolio for a software developer and independent product builder. The design uses a dark editorial system with a persistent profile sidebar, section-based home navigation, and dedicated work, about, and contact routes.

## Requirements

- Node.js 22.23.4 or newer
- npm

## Development

```sh
npm install
npx astro dev --background
```

Manage the background server with:

```sh
npx astro dev status
npx astro dev logs
npx astro dev stop
```

## Build

```sh
npm run build
npm run preview
```

## Structure

- `src/pages/` contains the home page and dedicated work, about, contact, and résumé routes.
- `src/layouts/Layout.astro` provides shared metadata, navigation, and footer.
- `src/components/` contains the reusable sidebar navigation.
- `src/styles/global.css` defines the dark palette, responsive layout, and shared styles.
- `src/assets/` contains authentic product screenshots used in the project presentation.
- `public/` contains the favicon, Open Graph card, and robots rules.

Set `PUBLIC_SITE_URL` in the deployment environment to enable absolute canonical and Open Graph URLs. The production domain has not been provided yet.
