# CompanyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.2.

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

## How install ngrx?
- [Github ngrx](https://github.com/ngrx)

```bash
npm install -g @angular/cli
ng new company-app
npm init --yes (create package.json)
npm install @ngrx/core @ngrx/effects @ngrx/store @ngrx/store-devtools --save
npm install @ngrx/core @ngrx/effects @ngrx/store @ngrx/store-devtools --save
```

```bash
ng g interface models/appState
```

## Structure 
- ./company-app/src/app/store/actions/company.actions.ts
- ./company-app/src/app/store/effects/company.effects.ts
- ./company-app/src/app/store/reducer/company.reducer.ts
- ./company-app/src/app.module.ts
- ./company-app/src/app.component.ts
- ./company-app/src/app/models/app-state.ts 
- 
- ./app/containers/store/..

## Tutorial
- [store-devtools](https://github.com/ngrx/store-devtools)
- [wallabyjs](https://wallabyjs.com/)
- [Play by Play Angular and ngrx](https://app.pluralsight.com/library/courses/play-by-play-angular-ngrx/table-of-contents)