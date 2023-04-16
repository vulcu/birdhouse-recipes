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
