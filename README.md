# Jason Perng's Portfolio

This repository includes my personal portfolio site, illustrating the projects I have built and been a part of, with explanations highlighting each product. This site also functions as one of my projects, focusing on learning Next.js while refreshing my knowledge of React and TypeScript in addition to providing a centralised place where I can showcase my portfolio. This project's roadmap and list of features can be found on the [wiki](https://github.com/Jason17401/portfolio/wiki/Project-Specifications).

**Live deployed site: [<u>jasonperng.vercel.app</u>](jasonperng.vercel.app)**

## Developer Instructions

This developer environment requires `Node.js` 20 or newer, with `v26.13.0` being the exact version used during development, and `npm` installed.

```bash

git clone https://github.com/Jason17401/portfolio.git
cd portfolio
npm install
npm run dev
```

Then in your browser, navigate to the site's URL `localhost:3000`.

### Available Scripts

| Script              | Purpose                                                                       |
| ------------------- | ----------------------------------------------------------------------------- |
| `npm run dev`       | Runs the site in a local dev server where change are reflected in real-time.  |
| `npm run build`     | Compiles and builds the source code into production assets.                   |
| `npm run start`     | Boots up the application server from local compile build files.               |
| `npm run lint`      | Runs ESLint across the codebase to check for code quality.                    |
| `npm run format`    | Formats the codebase with Prettier according to set standards.                |
| `npm run typecheck` | Checks codebase for type errors, including routes and pages without building. |

## Workflow

- **Branching:** all new work beings from feature branches (`feat/..`, `fix/..`, `doc/..`) and is merged into `main` through pull requests.
- **Pre-commit hook:** Runs ESLint and Prettier check on staged codebase files.
- **Pre-push hook:** Runs `typegen` to check for any type errors in staged codebase files before CI.
- **CI:** Every pull request will run lint, type check, production build, and deployment.
- **Deploying:** For each pull request, a preview build on vercel is automatically generated and `main` is deployed onto production.

## Technology Stack

- **Framework:** Next.js 16
- **Languages:** TypeScript, HTML, CSS
- **Styling:** Tailwind CSS, shadcn/ui, and next-themes
- **Tools:** ESLint, Prettier, Husky, and lint-staged
- **CI/CD:** GitHub Actions and Vercel

## Project Structure

```
src/
    app/
        (site)/
            projects/
                [slug]/                 Dynamic Page per Project
                page.tsx                Project List Page
            about/                      About Page
            contact/                    Contact page
            layout.tsx
            page.tsx                    Home page
        layout.tsx                      Root layout
        not-found.tsx                   404 Not Found Page
        sitemap.ts
        robots.ts
        icon.tsx
    components/
        layout/                         Site structure
        ui/                             shadcn/ui primitives
    lib/                                Shared types, site details, utils
    server/
        queries/                        Data access
```
