[![@coreui angular](https://img.shields.io/badge/@coreui%20-angular-lightgrey.svg?style=flat-square)](https://github.com/coreui/angular)
[![npm-coreui-angular][npm-coreui-angular-badge]][npm-coreui-angular]
[![npm-coreui-angular][npm-coreui-angular-badge-next]][npm-coreui-angular]
[![NPM downloads][npm-coreui-angular-download]][npm-coreui-angular]  
[![@coreui coreui](https://img.shields.io/badge/@coreui%20-coreui-lightgrey.svg?style=flat-square)](https://github.com/coreui/coreui)
[![npm package][npm-coreui-badge]][npm-coreui]
[![NPM downloads][npm-coreui-download]][npm-coreui]  
![angular](https://img.shields.io/badge/angular-^19.1.0-lightgrey.svg?style=flat-square&logo=angular)

[npm-coreui-angular]: https://www.npmjs.com/package/@coreui/angular

[npm-coreui-angular-badge]: https://img.shields.io/npm/v/@coreui/angular.png?style=flat-square

[npm-coreui-angular-badge-next]: https://img.shields.io/npm/v/@coreui/angular/next?style=flat-square&color=red

[npm-coreui-angular-download]: https://img.shields.io/npm/dm/@coreui/angular.svg?style=flat-square

[npm-coreui]: https://www.npmjs.com/package/@coreui/coreui

[npm-coreui-badge]: https://img.shields.io/npm/v/@coreui/coreui.png?style=flat-square

[npm-coreui-download]: https://img.shields.io/npm/dm/@coreui/coreui.svg?style=flat-square

# NIISE Web Application

A robust and user-friendly web platform designed to streamline and manage immigration-related workflows. Built on the latest Angular 19 framework, this system provides a fast, secure, and responsive interface for both administrators and applicants. The project is developed as a Progressive Web App (PWA), offering offline capabilities and a native app-like experience on desktop and mobile devices. The user interface is powered by CoreUI, ensuring a professional, clean, and intuitive design that is easy to navigate.

## Table of Contents

* [Quick Start](#quick-start)
* [Installation](#installation)
* [Basic usage](#basic-usage)
* [What's included](#whats-included)
* [Documentation](#documentation)
* [Versioning](#versioning)
* [Creators](#creators)
* [Copyright and License](#copyright-and-license)

## Quick Start

- Clone the repo: `git clone https://scm.awanheitech.com/jim/niise/frontend/fe-angular.git`

#### <i>Prerequisites</i>

Before you begin, make sure your development environment includes `Node.js®` and an `npm` package manager.

###### Node.js

[**Angular 19**](https://angular.io/guide/what-is-angular) requires `Node.js` LTS version `^18.19.1` or `^20.11.1`.

- To check your version, run `node -v` in a terminal/console window.
- To get `Node.js`, go to [nodejs.org](https://nodejs.org/).

###### Angular CLI

Install the Angular CLI globally using a terminal/console window.

```bash
npm install -g @angular/cli
```

### Installation

``` bash
$ npm install
$ npm update
```

### Basic usage

``` bash
# dev server with hot reload at http://localhost:4200
$ npm start
```

Navigate to [http://localhost:4200](http://localhost:4200). The app will automatically reload if you change any of the source files.

#### Build

Run `build` to build the project. The build artifacts will be stored in the `dist/` directory.

```bash
# build for production with minification
$ npm run build
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations.
You'll see something like this:

```
coreui-free-angular-admin-template
├── src/                         # project root
│   ├── app/                     # main app directory
|   │   ├── icons/               # icons set for the app
|   │   ├── layout/              # layout 
|   |   │   └── default-layout/  # layout components
|   |   |       └── _nav.js      # sidebar navigation config
|   │   └── views/               # application views
│   ├── assets/                  # images, icons, etc.
│   ├── components/              # components for demo only
│   ├── scss/                    # scss styles
│   └── index.html               # html template
│
├── angular.json
├── README.md
└── package.json
```

## Documentation

The documentation for the NIISE application development is shared in Sharepoints and Jira 

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.1.5.

## Versioning

TBA

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end
testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Creators

**Łukasz Holeczek**

* <https://twitter.com/lukaszholeczek>
* <https://github.com/mrholek>
* <https://github.com/coreui>

**CoreUI team**

* https://github.com/orgs/coreui/people

## Copyright and License

copyright 2025 creativeLabs Łukasz Holeczek.

Code released under [the MIT license](https://github.com/coreui/coreui-free-react-admin-template/blob/master/LICENSE).
There is only one limitation you can't re-distribute the CoreUI as stock. You can’t do this if you modify the CoreUI. In the past, we faced some problems with
persons who tried to sell CoreUI based templates.
