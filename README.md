# nutshell.me
[![build workflow](https://github.com/heykos/nutshell.me/actions/workflows/build-deploy-merge.yml/badge.svg)](https://github.com/HeyKos/nutshell.me/actions/workflows/build-deploy-merge.yml)
[![codecov](https://codecov.io/gh/HeyKos/nutshell.me/branch/main/graph/badge.svg?token=XI01Q1A5XD)](https://codecov.io/gh/HeyKos/nutshell.me)
[![Storybook](https://raw.githubusercontent.com/storybookjs/brand/master/badge/badge-storybook.svg)](https://heykos.github.io/nutshell.me)

A application that unifies various user accounts to visualize a person's life -- in a nutshell.

**[Live Site](https://nutshell-me.web.app)**


## Stack

- [React](https://reactjs.org/) - Frontend application development
- [Material-UI](https://material-ui.com/) - React components, and application styles
- [Firebase](https://console.firebase.google.com/project/nutshell-me/overview) - database, storage, hosting provider

## Developer Guide

### Development Tooling
- [Vite](https://vitejs.dev/) - Development server & Frontend tooling
- [TypeScript](https://www.typescriptlang.org/) - Typing, and javascript transpiling
- [ESLint](https://eslint.org/) - Typescript linting
- [Prettier](https://prettier.io/) - Code autoformatting
- [Jest](https://jestjs.io/) - Unit testing
- [Github Actions](https://github.com/HeyKos/nutshell.me/actions) - Build, test, and deploy automation
- [Codecov](https://app.codecov.io/gh/HeyKos/nutshell.me) - Code coverage reporting for automated tests
- [Storybook](https://storybook.js.org/) - React component library

### Prerequisites
1. Download and install [NodeJS version 14.x](https://nodejs.org/en/download/).
2. Create a `.env` file (using [.env.sample](.env.sample) as a guide), and set the values from the firebase app ([guide](https://support.google.com/firebase/answer/7015592)).
3. Run `npm install`

### Active Development

```
npm run dev
```