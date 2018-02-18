# Redux Architecture
Project seed app for NGRX application using Angular, NGRX Store, Effects, Router Store.

![NGRX Architecture](https://github.com/pedalv/FrontApp/blob/master/Angular/redux-architecture/NGRX-architecture.PNG)

## Tools and my setup
- [Text editor - Visual Studio Code](https://code.visualstudio.com/)
- [VSCode Plugin - Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 
- [VSCode Plugin - Angular Language features](https://marketplace.visualstudio.com/items?itemName=natewallace.angular2-inline)
- [VSCode Plugin - VSCode Icons](https://github.com/vscode-icons/vscode-icons)
- [VSCode Plugin - Angular v5 Snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)
- [VSCode Plugin - Bootstrap 4, Font awesome 4, Font Awesome 5 Free & Pro snippets](https://marketplace.visualstudio.com/items?itemName=thekalinga.bootstrap4-vscode)
- [VSCode Plugin - C#](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp)
- [VSCode Plugin - C# Extensions](https://marketplace.visualstudio.com/items?itemName=jchannon.csharpextensions)
- [VSCode Plugin - Chrome](https://www.google.com/chrome/)
- [VSCode Plugin - Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
- [VSCode Plugin - npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)
- [VSCode Plugin - npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
- [VSCode Plugin - TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
- [VSCode Plugin - vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons)
- [nodejs](https://nodejs.org/en/)
- [Homebrew for MAC](https://brew.sh/)

## Documentation
- [The Ultimate Guide To Mastering Angular2](https://ultimateangular.com/)
- [Angular](https://angular.io/)
- [ngrx/store](https://github.com/ngrx/platform/blob/master/docs/store/README.md)
- [ngrx/effects](https://github.com/ngrx/platform/blob/master/docs/effects/README.md)
- [npm](https://www.npmjs.com/)
- [npm get started](https://docs.npmjs.com/getting-started/updating-local-packages)
- [Webpack](https://webpack.js.org/)

## Projects 
- [Redux Store: Seed](https://github.com/UltimateAngular/redux-store)
```bash
npm install -g node-sass
npm install -g typescript
npm install -g yarn, for MAC: brew update and brew install yarn 

cd <redux-store-project>
yarn install // or npm install
yarn start // or npm run start
```
> [Open your browser](http://localhost:8000)
- [NGRX App: Seed and Stepped Branches](https://github.com/UltimateAngular/ngrx-store-effects-app)
```bash
cd <ngrx-store-effects-app>
yarn install // or npm install
yarn start // or npm run start
```
> [Open your browser](http://localhost:3000)

## My Notes
- ng: Angular, rx: reactive (store, effects, root, feature reactive packages)
- pure functions: selectors, reducers, actions (const or classes)
> root and feature module support with
- Eager loading (root): all page
- Lazy loading (feature): certain areas of the page
- Reactive Angular

![NGRX Architecture](https://github.com/pedalv/FrontApp/blob/master/Angular/redux-architecture/ReactiveAngular2.PNG)

| Container | Presentational |
| --------------- | --------------- |
| Aware of Store | Not aware of Store |
| Dispatches Actions | Invokes callbacks via @Output | 
| Reads data from Store | Read data from @Inputs (immutable) | 


