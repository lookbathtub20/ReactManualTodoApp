# Project instructions

## Project overview

- This repository is a React application built with Vite.
- Application components and styles are in `src/`; reusable UI components are in `src/component/`.
- End-to-end tests and their directory-specific guidance are in `cypress/e2e/`.

## Making changes

- Follow the existing JavaScript and JSX conventions in the files you edit.
- Keep UI behavior in React components and use accessible labels and semantic HTML for controls and data tables.
- When changing user-visible behavior, update or add focused Cypress coverage in `cypress/e2e/`.
- Avoid editing generated output such as `dist/` or installed dependencies in `node_modules/`.

## Useful commands

- `npm run dev` starts the Vite development server.
- `npm run build` creates a production build.
- `npm run lint` runs ESLint.
- `npm run cy:run` starts the app and runs the Cypress end-to-end suite.
- `npm run cy:open` starts the app and opens Cypress interactively.
