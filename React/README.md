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