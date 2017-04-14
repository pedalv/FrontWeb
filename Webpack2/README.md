# Webpack
Start with (Webpack)[https://webpack.js.org/]

# Documentation
- (Getting Started)[https://webpack.js.org/guides/get-started/]
- (Install Node JS and NPM)[https://nodejs.org/en/]
- (Webpack Instalation)[https://webpack.js.org/guides/installation/]
- (Command Line Interface (CLI))[https://webpack.js.org/api/cli/] or (Node.js API)[https://webpack.js.org/api/node/]
- (webpack production-build)[https://webpack.js.org/guides/production-build/]
- (UglifyJS)[http://lisperator.net/uglifyjs/]
- (UglifyJS options)[https://github.com/mishoo/UglifyJS2#usage]
- (Webpack Development)[https://webpack.js.org/guides/development/]
- (Hot Module Replacement)[https://webpack.js.org/guides/hmr-react/]
-- (Configuration)[https://webpack.js.org/configuration/]
-- [devtool](https://webpack.js.org/configuration/devtool/)
-- (output)[https://webpack.js.org/configuration/output/]
-- (devServer documentation.)[https://webpack.js.org/configuration/dev-server/]
-- (stats)[https://webpack.js.org/configuration/stats/]
- (Authoring Libraries)[https://webpack.js.org/guides/author-libraries/]
- (ECMAScript 6 — New Features: Overview & Comparison)[http://es6-features.org/#Constants]

# webpack 2 demo
- Open 'webpack 2 demo' on a browser with link [https://github.com/pedalv/FrontApp/tree/master/Webpack2/webpack-demo/index.html](https://github.com/pedalv/FrontApp/tree/master/Webpack2/webpack-demo/index.html)
## Install library
```bash
npm install --save lodash
```
## Now run webpack on this folder with index.js as the entry file and bundle.js as the output file in which all code required for the page is bundled.
```bash
./node_modules/.bin/webpack app/index.js dist/bundle.js
```
# webpack 2 demo with a config
```bash
./node_modules/.bin/webpack --config webpack.config.js
```

# Using webpack with npm
- set up a little shortcut. Adjust package.json like this:
```bash
"scripts": {
    "build": "webpack"
  },
```
- npm run build -- --colors

# Conclusion
- (concepts)[https://webpack.js.org/concepts/]
- (configuration)[https://webpack.js.org/configuration/]
-- [devtool](https://webpack.js.org/configuration/devtool/)
-- (output)[https://webpack.js.org/configuration/output/]
-- (devServer documentation.)[https://webpack.js.org/configuration/dev-server/]
-- (stats)[https://webpack.js.org/configuration/stats/]
- (guides)[https://webpack.js.org/guides/]
- (api)[https://webpack.js.org/api/]