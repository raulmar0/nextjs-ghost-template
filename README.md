# Minimalist Next.js theme for Ghost CMS 

[Try the demo](https://raulmar0.github.io/nextjs-ghost-template/)

##  Table of Contents
1. [Features](#Features)
2. [Getting started](#getting-started)
3. [Customization](#customization)
3. [How to add API KEY](#how-to-add-api-key)
3. [Deploy to production](#deploy-to-production)


## Features

- 🔥 [Next.js](https://nextjs.org) for Static Site Generator
- 👻 [Ghost](https://ghost.org/) for the CMS
- 🎨 Integrate with [Tailwind CSS](https://tailwindcss.com)
- 💅 [PostCSS](https://postcss.org) for processing [Tailwind CSS](https://tailwindcss.com)
- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

## Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting


## Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/raulmar0/nextjs-ghost-template.git my-project-name
cd my-project-name
npm install
```

First of all, use this line in `next.config.js` if using Github pages with a custom domain
```
module.exports = {
  basePath: '/your-repo-name',
}
```
else use
```
module.exports = nextConfig
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

## Customization

You can easily configure Next js Boilerplate. Please change the following file:

- General styles in `./styles/globals.scss`
- Blogpost styles in `./styles/globals.scss` under the `.post-` classes
- Favicon `./public`
- Main config file `./utils/AppConfig.ts`
  - Ghost url and version
  - Site name, title and description
  - Projects
  - Social media links

## How to add API KEY

- In the code `CONTENT_API_KEY` is referenced as a process.env variable
- In the yml file we add this before the `jobs` section
  ``` 
  env:
  CONTENT_API_KEY: ${{ secrets.CONTENT_API_KEY }}
  ```
- And finally we add the CONTENT_API_KEY in our [Github GUI as a secret](https://docs.github.com/es/actions/security-guides/encrypted-secrets)

## Deploy to production

In order to deploy your static site run:

```
$ npm run export
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

Now, your blog is ready to be deployed. All generated files are located at `_static` folder, which you can deploy with any hosting service.

Verified hosting services with a free tier
- Github pages
- Azure app services
- Digital Ocean Web Apps
