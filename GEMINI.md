# Project Overview

A minimalist, high-performance professional profile built with **React** and **Tailwind CSS**. This project serves as a personal landing page showcasing contact information, professional links, and interests. It is designed with a focus on clean architecture, responsiveness, and performance.

- **Frontend:** React 19, Vite, Tailwind CSS
- **Icons:** Lucide React
- **Tooling:** Biome (Linting & Formatting)
- **Deployment:** GitHub Pages

## Building and Running

### Development
Start the development server with hot-reload:
```bash
npm run dev
```

### Production
Build the project for production:
```bash
npm run build
```
*Note: A static `public/profile.json` is automatically generated from `src/data.ts` during the build process.*

Preview the production build locally:
```bash
npm run preview
```

### Deployment
Deploy the project to GitHub Pages:
```bash
npm run deploy
```

### Linting and Formatting
Check for linting and formatting issues:
```bash
npm run lint
```
Automatically fix linting issues and format code:
```bash
npm run lint:fix
# or
npm run format
```

## Development Conventions

- **Component Structure:** Use functional components with hooks.
- **Styling:** Strictly use **Tailwind CSS** for all styling needs. Avoid custom CSS unless absolutely necessary (e.g., complex animations).
- **Data-Driven:** The application content is primarily driven by `src/data.ts`. Update this file to change profile information, links, or interests.
- **Type Safety:** Ensure types are defined or updated in `src/types.ts` for any data structure changes.
- **Code Quality:** Adhere to the rules defined in `biome.json`. Run `npm run lint:fix` before committing changes.
- **Icons:** Use **Lucide React** for standard icons. Custom SVG icons for specific platforms (like GitHub, Figma) are handled in `src/components/LinkIcon.jsx`.
