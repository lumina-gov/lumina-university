# Lumima University
The codebase for Lumina's education platform, Lumina University.

Powering the next generation of education.

## Built with
- Svelte - Frontend Framework
- Typescript - Main programming language
- Stylus - CSS Preprocessor

## How to run & develop
Clone the git repository to your local machine

- `cd` into the repository directory
- run `npm i` to install dependencies
- run `npm run dev` to start the development server
- if the GraphQL API has changed, run `npm run codegen`

## Where to find everything
- `src` - contains the source code for the website
  - `lib` - contains code that is used across multiple places (library)
  - `routes` - contains the code used across the web pages, including pages, layouts, page components
- `static` - contains static assets used for the website

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
