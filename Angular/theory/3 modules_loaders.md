## Module loaders
- A module loader interprets and loads a module written in a certain module format.
- A module loader runs at runtime:
> you load the module loader in the browser

> you tell the module loader which main app file to load

> the module loader downloads and interprets the main app file

> the module loader downloads files as needed

- If you open the network tab in your browser's developer console, you will see that many files are loaded on demand by the module loader.

- A few examples of popular module loaders are:
> RequireJS: loader for modules in AMD format
> SystemJS: loader for modules in AMD, CommonJS, UMD or System.register format
