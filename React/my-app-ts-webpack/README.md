## Goal
Minimal setup project for run an app with React + Webpack + TypeScript + Jest.
![Web services architecture](https://github.com/pedalv/FrontApp/blob/master/React/my-app-ts-webpack/react-testing-app.PNG)

- App-component
```javascript
<div className="App">
    <header className="App-header">
        <Logo width={150} height={150} />
        <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
        To get started, edit <code>src/index.tsx</code> and save to reload.
    </p>
</div>
```

- Date-component
```javascript
<div className="calendar-img-datepicker">
    <img src="./calendar.png" alt={calendarLogo} width={250} /> 
    <DatePicker className="calendar-datepicker" onChange={this.handleChange} value={this.state.value} />
</div>  
```

- Kunde-component
```javascript
<div className="Kunde">
    <h2>Apotek1 here!</h2>
</div>
```

- Hello-component
```javascript
<div className="Hello">
    <h1>This is a {this.props.framework} application using {this.props.compiler} with {this.props.bundler}</h1>
</div>
```

## Frameworks
- [Node.js V8.12.0](https://nodejs.org/en/)
- [npm - V6.4.1](https://www.npmjs.com/get-npm)
- [React – A JavaScript library for building user interfaces - V16.5.2](https://reactjs.org/)
- [webpack - V4.19.1](https://webpack.js.org/)
- [TypeScript - JavaScript that scales - V3.0.3](https://www.typescriptlang.org/)
- [Jest · Delightful JavaScript Testing - V23.6.0](https://jestjs.io/)
- [enzyme - V3.6.0](https://github.com/airbnb/enzyme)

## Frameworks to add later
- [Using Bootstrap 4 with React](https://www.techiediaries.com/react-bootstrap/)
- [React Router - Declarative routing for React](https://github.com/ReactTraining/react-router)
- [axios - Promise based HTTP client for the browser and node.js](https://github.com/axios/axios)

## Commands
- Run Unit test, "test": "react-scripts-ts test --env=jsdom",
```
npm run test
```
- Build front-end for production, "build": "./node_modules/.bin/webpack --mode production"
```
npm run build 
```
- Build front-end for development, "dev": "./node_modules/.bin/webpack --mode development",
```
npm run dev
```
-  Start application, "start:build": "npm run build && webpack-dev-server --open" or "start:dev": "npm run dev && webpack-dev-server --open"
```
mvn run start:build|dev
```

## React 
"@types/react": "^16.4.14",
"@types/react-dom": "^16.0.7",
"react": "^16.5.2",
"react-dom": "^16.5.2",
"react-scripts-ts": "^2.17.0",

## Webpack 
"webpack": "^4.19.1",
"webpack-cli": "^3.1.0",
"webpack-dev-middleware": "^3.3.0",
"webpack-dev-server": "^3.1.8",
"webpack-hot-middleware": "^2.24.0"

## Webpack config
"babel-jest": "^23.6.0",
"babel-loader": "^8.0.2",
"css-loader": "^1.0.0",
"file-loader": "^2.0.0",
"html-loader": "^0.5.5",
"less-loader": "^4.1.0",
"react-svg-loader": "^2.1.0",
"source-map-loader": "^0.2.4",
"style-loader": "^0.23.0",
"svg-inline-loader": "^0.8.0",
"svg-loader": "0.0.2",
"ts-loader": "^5.1.1",

## Webpack config plugin 
"html-webpack-plugin": "^3.2.0",
"mini-css-extract-plugin": "^0.4.2",

## TypeScript 
"typescript": "^3.0.3"

## Others
"moment": "^2.22.2",
"moment-timezone": "^0.5.21",
"react-date-picker": "^6.12.1",
"jest": "^23.6.0",
"less": "^3.8.1",

## Unit test 
"@types/enzyme": "^3.1.14",
"@types/enzyme-adapter-react-16": "^1.0.3",
"enzyme": "^3.6.0",
"enzyme-adapter-react-16": "^1.5.0",
"enzyme-to-json": "^3.3.4",
"@types/jest": "^23.3.2",
"jest": "^23.6.0",
"react-date-picker": "^6.12.1",

## Javascript 
"@babel/core": "^7.0.1",
"@babel/preset-env": "^7.1.0",
"@babel/preset-react": "^7.0.0",
"babel-jest": "^23.6.0",
"babel-loader": "^8.0.2",
"@types/node": "^10.10.1",
"@types/react": "^16.4.14",
"@types/react-dom": "^16.0.7",

## Articles
- [create-react-app](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment)
- [Code-Splitting](https://reactjs.org/docs/code-splitting.html)
- [POSTS](https://www.valentinog.com/blog/)
- [React 16.3 Context API inTypeScript](https://medium.com/@mtiller/react-16-3-context-api-intypescript-45c9eeb7a384)
- [The minimal React + Webpack 4 + Babel Setup](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/)
- [React with Typescript and Webpack](https://hackernoon.com/react-with-typescript-and-webpack-654f93f34db6)
- [Testing React with Jest and Enzyme](https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675)
