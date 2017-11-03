# MyEmptytest: 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.
> Example library for Angular 4.2.4

## Source

[How to create library for Angular(2+) and publish to npm from scratch.](https://hackernoon.com/how-to-create-library-in-angular-2-and-publish-to-npm-from-scratch-f2b1272d6266)

## Commands to create library 

```bash
npm install
node_modules/typescript/bin/tsc -p tsconfig.json
npm install --global rollup
rollup -c rollup.config.umd.js
rollup -c rollup.config.esm.js
npm install --save-dev del
npm run build
npm install --save-dev @angular/compiler-cli
npm run build
// TODO - PUBLISH
//Navigate to dist folder and npm publish from there. 
//So user that install our library will get files only from dist folder.
dist/npm publish
or 
npm run publish

// TODO - USE LIB
npm install myemptytext 
//import to their module like this
import { MyEmptyTextModule } from 'myemptytex';
```

## [error need auth You need to authorize this machine using `npm adduser`](https://github.com/workshopper/how-to-npm/issues/25)
- Switch to Login module (by typing "how-to-npm" on command line)
- Type "npm adduser" to login
- Type "npm whoami" to confirm if logged in
- Switch back to the package at which you are getting error(my case it was Publish Again)
- Type "npm publish"
Done

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
