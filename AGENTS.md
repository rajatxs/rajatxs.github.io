# Repository Guidelines

## Project Structure & Module Organization

This is a small static profile site. Runtime files live in `public/`: `index.html` defines the page, `style.css` contains responsive and light/dark theme styling, and `app.js` handles client-side behavior. Profile content is data-driven from `public/profile.json`; `profile.webp` and `favicon.svg` are the site assets. Project metadata and tooling are defined in `package.json`, `package-lock.json`, and `.prettierrc`.

## Build, Test, and Development Commands

Install the locked dependencies with:

```bash
npm ci
```

The project has no compilation step. Check formatting with `npm run format:check`, or apply the repository formatter with `npm run format`. To preview the site locally, use `npm start` and open the served `public/` directory in a browser. Do not commit generated output or dependency directories.

## Coding Style & Naming Conventions

Use four spaces, semicolons, and single quotes in JavaScript, matching `.prettierrc` (120-character print width). Keep HTML structure semantic and CSS selectors descriptive and component-oriented. Use kebab-case for new static asset filenames (for example, `social-preview.webp`) and camelCase for JavaScript variables and functions. Keep profile copy and links in `public/profile.json` rather than hard-coding data in the page when practical.

## Testing Guidelines

No automated test framework or coverage threshold is configured. Before submitting changes, run `npm run format:check`, verify the page in a browser at desktop and mobile widths, and check both color themes, navigation links, and asset loading. For content-only changes, validate that `public/profile.json` remains valid JSON.

## Commit & Pull Request Guidelines

Use short, imperative commit subjects with a conventional prefix such as `feat:`, `fix:`, `refactor:`, or `chore:` (example: `fix: improve profile metadata`). Keep each commit focused. Pull requests should explain the visible or structural change, identify relevant files, include screenshots or a short recording for UI changes, and mention the formatting checks performed. Call out changes to public URLs, profile data, or assets explicitly.

## Security & Configuration Tips

This site is entirely client-side, so never place secrets, tokens, or private contact data in `public/`. Treat all files under `public/` as publicly deployable. Review external links and metadata before merging.
