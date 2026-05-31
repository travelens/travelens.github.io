# Travels Through A Lens

![deploy](https://github.com/travelens/travelens.github.io/actions/workflows/deploy.yml/badge.svg)

My travelogue web site. This documents all the trips we have taken over the
years, to various countries.

This web site is written in HTML5, CSS, [UnoCSS](https://uno.antfu.me/)
[Typescript](https://www.typescriptlang.org) and
[MarkDoc](https://markdoc.dev) using
[Astro](https://astro.build) as a web framework and static site generator.

- Astro is the all-in-one web framework designed for speed. Pull your content from anywhere and deploy everywhere, all powered by your favorite UI components and libraries.
- Markdoc is a Markdown-based document format and a framework for content publishing.
- TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- UnoCSS is an atomic-CSS engine instead of a framework. Everything is designed with flexibility and performance in mind. There are no core utilities in UnoCSS, all functionalities are provided via presets.

It open source (MIT licence) and deployed using Github Pages.

The site design is based on [Digizu's TailwindCSS templates](https://templatesizu.co.uk/), particularly Essential and Impulse. The scrolling background on the home page is inspired by Eventually from [HTML5UP](https://html5up.net) by @ajkln.

## 🚀 Project Structure

Inside this project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Header.astro
|   ├── data/
|   |   └── trip.json
|   ├── countries/
|   |   └── country.md
│   ├── images/
│   │   └── image.jpg
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   |   └── index.astro
|   ├── place/
|   |   └── place.md
│   └── content.config.ts
└── package.json
```

In addition, each trip will be stored as a separate repository in the
`travelens` organization. This project integrates all the individual
repositories into a single seamless website.

## 🧞 Commands

`pnpm` is used as a package manager
All commands are run from the root of the project, from a terminal:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `pnpm install`      | Installs dependencies                            |
| `pnpm dev`          | Starts local dev server at `localhost:3000`      |
| `pnpm build`        | Build your production site to `./dist/`          |
| `pnpm preview`      | Preview your build locally, before deploying     |
| `pnpm astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro --help` | Get help using the Astro CLI                     |
