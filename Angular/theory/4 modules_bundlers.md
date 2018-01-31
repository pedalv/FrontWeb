# Module bundlers
- A module bundler replaces a module loader.

> It will bundle your entry file and and dependency on another file(module) by building a dependency graph and use the graph to generate an optimized bundle where scripts will be loaded in the correct order. 

> For short, when you divide your code to multiple files, module bundler will bundle your multiple files to just only one file for us.

- But, in contrast to a module loader, a module bundler runs at build time:

> you run the module bundler to generate a bundle file at build time (e.g. bundle.js)

> you load the bundle in the browser. If you open the network tab in your browser's developer console, you will see that only 1 file is loaded. No module loader is needed in the browser. All code is included in the bundle.

## Summary
> Module bundler and Module loader do similar job but not the same
— they load module files to the browser

> The difference is 

| Module loader | Module bundler |
| -------------- | -------------- |
| works in run time | work in compile time |
| load each file at a time | will bundle all module files in compile time to single file and browser will has to load only the bundled file |

- Examples of popular module bundlers are:
> Browserify: bundler for CommonJS modules

> Webpack: bundler for AMD, CommonJS, ES6 modules

> Rollup.js:bundler for AMD,UMD,CommonJS,ES6 modules