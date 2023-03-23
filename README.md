# Travels Through A Lens

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

The site design is based on [Digizu's TailwindCSS templates](https://templates.digizu.co.uk/), particularly Essential and Impulse. The scrolling background on the home page is inspired by Eventually from [HTML5UP](https://html5up.net) by @ajkln.

## 🚀 Project Structure

Inside this project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── image.jpg
│   ├── components/
│   │   └── Card.astro
│   ├── content/
│   │   └── article.md
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

In addition, each trip will be stored as a separate repository in the
`travelens` organization. This project integrates all the individual
repositories into a single seamless website.

## 🧞 Commands

`yarn` is used as a package manager
All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `yarn`          | Installs dependencies                            |
| `yarn dev`          | Starts local dev server at `localhost:3000`      |
| `yarn build`        | Build your production site to `./dist/`          |
| `yarn preview`      | Preview your build locally, before deploying     |
| `yarn astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `yarn astro --help` | Get help using the Astro CLI                     |
