# Contributing

## Getting Started

This project is built with [11ty](https://www.11ty.dev/).
It has been tested with with [Node.js](https://nodejs.org) v18.4.0.

Recommended: Install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
and use to install the appropriate Node.js version.
After installing, simply run:

```sh
nvm install 18
nvm use 18
```

### Install Dependencies

After cloning the repo, cd to the directory and run the following to
install all dependencies:

```sh
npm i
```

### Linting

PRs will not merge if they fail linting.
To confirm linting locally, run:

```sh
npm run lint
```

### Start Local Server

You can run 11ty locally by running:

```sh
npm run start
```

This command will watch for changes and update the local
server automagically.

## Adding Recipes

### Recipe Data

Each recipe is stored in [yaml](https://yaml.org/).
See [recipe-template.yaml](recipe-template.yaml) for example template and details.

- Add recipe to `data/recipes/[category]/[your-recipe].yaml`
    - Filename should be in slug/url format.

### Including Images

Images do not have to be optimized, as that is taken care of by the compiler.
They should, however, be of a reasonable filesize (2-5 MB is ideal).

You can add as many images as you like. The first image will be used as
the featured image at the top of the recipe and as the thumbnail image.

- Add images to `data/recipes/[category]/images/[your-recipe][-##].jpg`
- Each image must be added in the recipe yaml.
  See [template](recipe-template.yaml) for details.
- Each image must have [alt text](https://www.w3.org/WAI/tutorials/images/informative/#example-2-images-used-to-supplement-other-information).
- Images may optionally have a photographer, source, and/or [license](https://spdx.org/licenses/).

### Adding an Icon

An icon can be selected in addition to or in lieu of an image if none are available.
See [localhost:8080/icons](http://localhost:8080/icons/) or
[vulcu.github.io/birdhouse-recipes/icons](https://vulcu.github.io/birdhouse-recipes/icons/)
for full list.

### Required and Optional Details

The following fields are required:

- `title`
- `ingredients`
- `steps`

All other fields are optional.
If adding `images`, each image must have a `filename` and `alt` field.
