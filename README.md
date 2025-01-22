# Welcome to [Randy Phalla's Portfolio](https://randyphalla.github.io/)
> Built with [Astro](https://astro.build/), [Tailwind](https://tailwindcss.com/), and [React](https://react.dev/).

## Getting started
> Need v22 of Node and [yarn v4](https://yarnpkg.com/getting-started/install)
- `yarn install` | Installs dependencies
- `yarn run dev` | Starts local dev server at `localhost:3000`

## CLI
- `yarn run astro...` | Run CLI commands like `astro add`, `astro preview`
- `yarn run astro --help` | Get help using the Astro CLI

## Building
- `yarn run build` | Build your production site to `./dist/`
- `yarn run preview` | Preview your build locally, before deploying

## Hosting
> Using [Github pages](https://pages.github.com/) and [Netlify](https://www.netlify.com/)

## Update dependencies / packages / libraries
- `yarn upgrade`

## Problems

### When building to Netlify, this error occur. Delete `.netlify/functions-internal` folder, to fix this issue
> https://github.com/netlify/next-runtime/discussions/803
```
6:45:22 PM: ✘ [ERROR] Could not resolve "@astrojs/netlify/netlify-functions.js"
6:45:22 PM:     .netlify/functions-internal/entry.mjs:1:25:
6:45:22 PM:       1 │ import * as adapter from "@astrojs/netlify/netlify-functions.js";
6:45:22 PM:         ╵                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
6:45:22 PM:   The path "./netlify-functions.js" is not exported by package "@astrojs/netlify":
6:45:22 PM:     node_modules/@astrojs/netlify/package.json:20:13:
6:45:22 PM:       20 │   "exports": {
6:45:22 PM:          ╵              ^
6:45:22 PM:   You can mark the path "@astrojs/netlify
```
