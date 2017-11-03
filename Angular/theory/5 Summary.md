# What is a module?
- A module is a reusable piece of code that encapsulates implementation details and exposes a public API so it can be easily loaded and used by other code.

- Good authors divide their books into chapters and sections; 
- good programmers divide their programs into modules.

- Like a book chapter, modules are just clusters of words (or code, as the case may be).
- Good modules, however, are highly self-contained with distinct functionality, allowing them to be shuffled, removed, or added as necessary, without disrupting the system as a whole.


# Why do we need modules?
- Technically we can write code without modules.

- Modules are a pattern that developers have been using in many different forms and programming languages since the 60's and 70's.

- In JavaScript, modules should ideally allow us to:
> abstract code: to delegate functionality to specialised libraries so that we don't have to understand the complexity of their actual implementation

> encapsulate code: to hide code inside the module if we don't want the code to be changed

> reuse code: to avoid writing the same code over and over again

> manage dependencies: to easily change dependencies without rewriting our code


# Why use modules?
- There are a lot of benefits to using modules in favor of a sprawling, interdependent codebase. The most important ones, in my opinion, are:
- Maintainability: 
> By definition, a module is self-contained. A well-designed module aims to lessen the dependencies on parts of the codebase as much as possible, so that it can grow and improve independently. Updating a single module is much easier when the module is decoupled from other pieces of code.

> Going back to our book example, if you wanted to update a chapter in your book, it would be a nightmare if a small change to one chapter required you to tweak every other chapter as well. Instead, you’d want to write each chapter in such a way that improvements could be made without affecting other chapters.

- Namespacing: 
> In JavaScript, variables outside the scope of a top-level function are global (meaning, everyone can access them). Because of this, it’s common to have “namespace pollution”, where completely unrelated code shares global variables.

> Sharing global variables between unrelated code is a big no-no in development.
As we’ll see later in this post, modules allow us to avoid namespace pollution by creating a private space for our variables.

- Reusability: 
> Let’s be honest here: we’ve all copied code we previously wrote into new projects at one point or another. For example, let’s imagine you copied some utility methods you wrote from a previous project to your current project.

> That’s all well and good, but if you find a better way to write some part of that code you’d have to go back and remember to update it everywhere else you wrote it.

> This is obviously a huge waste of time. Wouldn’t it be much easier if there was — wait for it — a module that we can reuse over and over again?









# Summary
- To better understand tooling in modern JavaScript development environments, it is important to understand the differences between modules, module formats, module loaders and module bundlers.

- A **module** is a reusable piece of code that encapsulates implementation details and exposes a public API so it can be easily loaded and used by other code.

> A **module format** is the syntax we use to define a module. Different module formats such [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD), [CommonJS](http://www.commonjs.org/), [UMD](https://github.com/umdjs/umd) and [System.register](https://github.com/ModuleLoader/es-module-loader/blob/master/docs/system-register.md) have emerged in the past and a native module format is now available since ES6.

> A **module loader** interprets and loads a module written in a certain module format at runtime. Popular examples are [RequireJS](http://requirejs.org) and [SystemJS](https://github.com/systemjs/systemjs).

> A **module bundler** replaces a module loader and generates a bundle of all code at build time. Popular examples are [Browserify](http://browserify.org/) and [Webpack](https://webpack.github.io).