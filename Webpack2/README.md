# [Webpack](https://webpack.js.org/) Documentation
- [Getting Started](https://webpack.js.org/guides/get-started/)
- [Install Node JS and NPM](https://nodejs.org/en/)
- [Webpack Instalation](https://webpack.js.org/guides/installation/)
- [Command Line Interface (CLI)](https://webpack.js.org/api/cli/) or [Node.js API](https://webpack.js.org/api/node/)
- [webpack production-build](https://webpack.js.org/guides/production-build/)
- [UglifyJS](http://lisperator.net/uglifyjs/)
- [UglifyJS options](https://github.com/mishoo/UglifyJS2#usage)
- [Webpack Development](https://webpack.js.org/guides/development/)
- [Hot Module Replacement](https://webpack.js.org/guides/hmr-react/)
- [Configuration](https://webpack.js.org/configuration/)
1. [devtool](https://webpack.js.org/configuration/devtool/)
2. [output](https://webpack.js.org/configuration/output/)
3. [devServer](https://webpack.js.org/configuration/dev-server/)
4. [stats](https://webpack.js.org/configuration/stats/)
- [Authoring Libraries](https://webpack.js.org/guides/author-libraries/)
- [ECMAScript 6 — New Features: Overview & Comparison](http://es6-features.org/#Constants)

# webpack 2 demo
- Open 'Webpack2/webpack-demo/index.html' file on a browser.

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

# Using webpack with npm
- Adjust package.json to set a little shortcut like this:
```bash
"scripts": {
    "build": "webpack"
  },
```
```bash
npm run build -- --colors
```

# Conclusion
- [concepts](https://webpack.js.org/concepts/)
1. [webpack-merge](https://github.com/survivejs/webpack-merge)
2.1 [caching](https://webpack.js.org/guides/caching/)
2.2 [output-concepts](https://webpack.js.org/concepts/output/)
2.2.1 [TemplatedPathPlugin.js](https://github.com/webpack/webpack/blob/master/lib/TemplatedPathPlugin.js)
3.1 [plugins](https://webpack.js.org/api/plugins/)
3.2 [tapable](https://github.com/webpack/tapable)
3.3 [list of plugins](https://webpack.js.org/plugins/)
4. [loaders](https://webpack.js.org/concepts/loaders/)
- [configuration](https://webpack.js.org/configuration/)
1. [devtool](https://webpack.js.org/configuration/devtool/)
2 [output-configuration](https://webpack.js.org/configuration/output/)
3. [devServer documentation.](https://webpack.js.org/configuration/dev-server/)
4. [stats](https://webpack.js.org/configuration/stats/)
- [guides](https://webpack.js.org/guides/)
- [api](https://webpack.js.org/api/)

# ExtractTextWebpackPlugin
- [usage-example-with-css](https://webpack.js.org/plugins/extract-text-webpack-plugin/#usage-example-with-css)