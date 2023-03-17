# Travels Through A Lens

My travelogue web site. This documents all the trips we have taken over the
years, to various countries.

This web site is written in HTML, CSS,
[Typescript](https://www.typescriptlang.org) and
[MarkDoc](https://markdoc.dev) using
[Astro](https://astro.build) as a web framework and static site generator.

It open source (MIT licence) and deployed using Github Pages.

The initial site design will be based on [HTML5UP](https://html5up.net) site
templates, particularly Eventually and Story.

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
