# [React](https://reactjs.org/) Documentation
- [React on GitHub](https://github.com/facebook/react)
- [Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [QUICK START](https://reactjs.org/docs/installation.html)
- [Top 5 Tutorials for Getting Started with React](http://andrewhfarmer.com/getting-started-tutorials/)
- [JSX](https://reactjs.org/docs/introducing-jsx.html)
- [TypeScript](http://www.typescriptlang.org/):
> JavaScript that scales

> is a superset of ECMAScript 6 (ES6), and is backwards compatible with ECMAScript 5 (i.e.: JavaScript). 
- [ECMAScript 201*](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015)
- [A re-introduction to JavaScript (JS tutorial)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- Abbreviated "arrow" syntax for anonymous functions
- [ES6: arrow functions the new feature](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [ES6: classes the new feature](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [ES6: let the new feature](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [ES6: const statements the new feature](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- Static Typing, Generics, Lambdas, Iterators, For/Of loops, Python-style generators, Reflection , Type annotations and compile-time type checking, Type inference, Type erasure, Interfaces, Enumerated type, Mixin, Namespaces, Tuple, Await, Modules, Optional parameters and default parameters
- [React native](https://facebook.github.io/react-native/)


# Tips og Triks
- React is a JavaScript library for building user interfaces (V)
- AngularJs version 1 and Anguler version 2+ is use to create single pages (MV)
- React Native, which enables native Android, iOS, and UWP development with React
- React Fiber, a new core algorithm of React framework library for building user interfaces
- JSX = HTML + JavaScript.
- Reacts JS developers know that this ecosystem has reduced the churn, especially around the huge list of Redux/Flux flavors and routing. 
> So anything you build with React could be out of date or require serious amendments.
- Since ReactJS is plain JavaScript, we can achieve the aforementioned objectives using RequireJS, pack and use Browserify or Webpack for module design.
- Use on* names for the attributes and handle* for the handler methods.
- Most of the time, you can use React.PureComponent instead of writing your own shouldComponentUpdate. 
- [Optimizing Performance (React.PureComponent)](https://reactjs.org/docs/optimizing-performance.html#examples)
- [Controlled and uncontrolled form inputs in React don't have to be complicated](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)
- [Redux](https://github.com/reactjs/redux)
- [How to safely use React context](https://medium.com/@mweststrate/how-to-safely-use-react-context-b7e343eff076)
- [Testing React Apps](http://facebook.github.io/jest/docs/en/tutorial-react.html#content)
- [Enzyme](http://airbnb.io/enzyme/)
- [React and Webpack](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)

| Element | Value property | Change  callback | New value in the callback |
| --------------- | --------------- | --------------- | --------------- |
| <input type="text" /> | value="string" | onChange | event.target.value |
| <input type="checkbox" /> | checked={boolean} | onChange | event.target.checked |
| <input type="radio" /> | checked={boolean} | onChange | event.target.checked |
| <textarea /> | value="string" | onChange | event.target.value |
| <select /> | value="option value" | onChange | event.target.value |

# React demo
- Open 'React/single-file-example.html' file on a browser.

# [Installation](https://reactjs.org/docs/installation.html)
- [Creating a new application](https://github.com/facebookincubator/create-react-app#create-react-app-)
- [Table of contents](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#table-of-contents)

```bash
npm install -g create-react-app
create-react-app my-app

cd my-app
npm start
```

## Commands
- npm start: Starts the development server.
- npm run build: Bundles the app into static files for production.
> This will create a production build of your app in the build/ folder of your project.

> Remember that this is only necessary before deploying to production. 

> For normal development, use npm start.

> For the most efficient Brunch production build, install the uglify-js-brunch plugin: npm install --save-dev uglify-js-brunch

> then, to create a production build, add the -p flag to the build command: brunch build -p

> npm install --save-dev envify uglify-js uglifyify 

```bash
browserify ./index.js \
  -g [ envify --NODE_ENV production ] \
  -g uglifyify \
  | uglifyjs --compress --mangle > ./bundle.js
```
> [Creating a React app with Rollup](https://gist.github.com/Rich-Harris/cb14f4bc0670c47d00d191565be36bf0): npm install --save-dev rollup-plugin-commonjs rollup-plugin-replace rollup-plugin-uglify 

> [webpack](https://webpack.js.org/guides/production/)
```bash
new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
}),
new webpack.optimize.UglifyJsPlugin()
```
> Profiling Components with the Chrome Performance Tab: Load your app with ?react_perf in the query string

> If you know that in some situations your component doesn’t need to update, you can return false from shouldComponentUpdate instead, to skip the whole rendering process, including calling render() on this component and below.

> other way for shouldComponentUpdate it is extends React.PureComponent. Atention for objects becaause the ref is equal but the content is different values 
- npm test: Starts the test runner.
- npm run eject: Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!

## A modern build pipeline typically consists of:
- A package manager, such as Yarn or npm. It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them.
- A bundler, such as webpack or Browserify. It lets you write modular code and bundle it together into small packages to optimize load time.
- A compiler such as Babel. It lets you write modern JavaScript code that still works in older browsers.
- Note: recommend setting up a production build process to ensure you’re using the fast version of React in production.

```bash
npm init
npm install --save react react-dom
```


# [An interactive tic-tac-toe game](https://codepen.io/gaearon/pen/gWWZgR?editors=0010) demo