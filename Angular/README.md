# [Angular](https://angular.io/docs) Documentation
- [Angular on GitHub](https://github.com/angular/angular)
- [QUICK START](https://angular.io/guide/quickstart)
- [Tutorial](https://angular.io/tutorial)
- [Resources](https://angular.io/resources)
- [Style Guide](https://angular.io/guide/styleguide)
- [Angular API](https://angular.io/api)
- [Browser support](https://angular.io/guide/browser-support)

# Compare
- React is a JavaScript library for building user interfaces (V)
- AngularJs version 1 and Angular version 2+ is use to create single pages (MV)

# [Angular CLI](https://cli.angular.io/)
- is a command line interface tool that can create a project, add files, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.
- [Angular CLI on GitHub](https://github.com/angular/angular-cli/wiki)
```bash
node -v -> v6.11.5
npm -v -> 3.10.10
npm install -g @angular/cli ->  install the Angular CLI globally.
ng new my-app -> Create a new project
cd my-app
ng serve --open
```

# Other CLI commands
- Bundling: 'ng build --prod' or 'ng serve --prod' will also make use of uglifying and tree-shaking functionality
- Running unit tests: 'ng test' will automatically watch your files for changes, 'ng test --watch=false' or 'ng test --single-run' run tests a single time, 'ng test --code-coverage' run tests with coverage report that it will be in the coverage/ directory.
- Running end-to-end tests: 'ng e2e', note: before running the tests make sure you are serving the app via ng serve. 
- [Angular CLI Config Schema](https://github.com/angular/angular-cli/wiki/angular-cli)
- [Stories describing how to do more with the CLI](https://github.com/angular/angular-cli/wiki/stories)
- Additional Commands: 'ng new', 'ng serve, 'ng lint', 'ng test', 'ng e2e', 'ng build', 'ng get/ng set', 'ng doc', 'ng xi18n'
- 'ng generate class', 'ng generate component', 'ng generate directive', 'ng generate enum', 'ng generate guard', 'ng generate interface', 'ng generate module', 'ng generate pipe', 'ng generate service'
- 'ng build --target=production --environment=prod' or 'ng build --target=development --environment=dev', the build artifacts will be stored in the dist/ directory.
- Both --dev/--target=development and --prod/--target=production are 'meta' flags, that set other flags. If you do not specify either you will get the --dev defaults.

| Flag | --dev | --prod |
| --------------- | --------------- | --------------- |
| --aot | false | true |
| --environment | dev | prod |
| --output-hashing | media | all |
| --sourcemaps | true | false |
| --extract-css | false | true |
| --named-chunks | true | false |
| --build-optimizer | false | true with AOT and Angular 5 |

- build-optimizer, --build-optimizer, enables @angular-devkit/build-optimizer optimizations when using `--aot`
- 'ng build/serve/e2e', will delete the output directory (dist/ by default). This can be disabled via the --no-delete-output-path (or --delete-output-path=false) flag.
- 'ng build --base-href /myUrl/' or 'ng build --bh /myUrl/', sets base tag href to /myUrl/ in your index.html
- 'ng eject --force=true', Overwrite any webpack.config.js and npm scripts already existing

# Unit test 
- [Karma](http://karma-runner.github.io/0.13/index.html)
-  Defaults to the karma config file in `.angular-cli.json`
- [Protractortest](http://www.protractortest.org/#/)
- Defaults to the protractor config file in `.angular-cli.json`.
- [Testing Out Protractor Interactively](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)
- The mapping used to determine which environment file is used can be found in .angular-cli.json:
```bash
"environmentSource": "environments/environment.ts",
"environments": {
  "dev": "environments/environment.ts",
  "prod": "environments/environment.prod.ts"
}

# these are equivalent
ng build --target=production --environment=prod
ng build --prod --env=prod
ng build --prod
# and so are these
ng build --target=development --environment=dev
ng build --dev --e=dev
ng build --dev
ng build
```
- Add your own env files other than dev and prod by doing the following:
```bash
create a src/environments/environment.NAME.ts
add { "NAME": 'src/environments/environment.NAME.ts' } to the apps[0].environments object in .angular-cli.json
use them via the --env=NAME flag on the build/serve commands.
```

# Tips and Triks
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
- stats-json: --stats-json,  generates a stats.json file which can be analyzed using tools such as: webpack-bundle-analyzer or [https://webpack.github.io/analyse](https://webpack.github.io/analyse).
- [Edit config](http://editorconfig.org/)
- [Edit config on GitHub](https://github.com/editorconfig/editorconfig/wiki/Projects-Using-EditorConfig)
- [How to create library for Angular(2+) and publish to npm from scratch](https://hackernoon.com/how-to-create-library-in-angular-2-and-publish-to-npm-from-scratch-f2b1272d6266)
- [A 10 minute primer to JavaScript modules, module formats, module loaders and module bundlers](https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/)
- [Angular Modules vs ES6 Modules](https://juristr.com/blog/2017/03/angular-modules-vs-es6-modules/)
- [JavaScript Modules: A Beginner’s Guide](https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc)
- [Modules | Node.js Documentation](https://nodejs.org/api/modules.html#modules_all_together)
- [16. Modules](http://exploringjs.com/es6/ch_modules.html)


# On-line demos
- [Angular Example - Hello World](https://embed.plnkr.co/?show=preview&show=app%2Fapp.component.ts)
- [Angular Example - Intro to Angular](https://embed.plnkr.co/?show=preview)
- [Angular Example - Tour of Heroes: Part 6](https://embed.plnkr.co/?show=preview)

# Local demos
```bash
ng new my-app -> Create a new project
cd my-app
ng serve --open 
or
ng serve --open --host 0.0.0.0 --port 4200
```
- [Navigate to http://localhost:4200/ - QuickStart: Welcome to app!](http://localhost:4200/)
```bash
cd architecture
npm install
ng serve --open --host 0.0.0.0 --port 4201
```
-[Navigate to http://localhost:4201/ - Architecture of Angular](http://localhost:4201) 
```bash
cd angular-tour-of-heroes
npm install
npm start eller 
ng serve --open --host 0.0.0.0 --port 4202
```
- [Navigate to http://localhost:4202/ - Angular Tour of Heroes](http://localhost:4202)
```bash
cd toh-pt6
npm install
ng serve --open --host 0.0.0.0 --port 4203
```
- [Navigate to http://localhost:4203/ - Angular Tour of Heroes (toh-pt6 version)](http://localhost:4202)

- [How publish my-emptytext library for use as a module](https://github.com/pedalv/FrontApp/tree/master/Angular/my-emptytest)



# polyfills.ts
- Different browsers have different levels of support of the web standards. 
- Polyfills help normalize those differences. 
- You should be pretty safe with core-js and zone.js.
- [core-js](https://www.npmjs.com/package/core-js)
- [zone.js](https://www.npmjs.com/package/zone.js)

# npm link vs npm install -g
- npm link is very similar to npm install -g 
- except that instead of downloading the package from the repo, the just cloned angular-cli/ folder becomes the global package. 
- Additionally, this repository publishes several packages and we use special logic to load all of them on development setups.
```bash
git clone https://github.com/angular/angular-cli.git
cd angular-cli
npm link

ng new foo
cd foo
npm link @angular/cli
ng serve
```
- npm link @angular/cli is needed because by default the globally installed @angular/cli just loads the local @angular/cli from the project which was fetched remotely from npm. 
- npm link @angular/cli symlinks the global @angular/cli package to the local @angular/cli package. 
- Now the angular-cli you cloned before is in three places: The folder you cloned it into, npm's folder where it stores global packages and the Angular CLI project you just created.
- You can also use ng new foo --link-cli to automatically link the @angular/cli package.
- [Linking any npm package locally](http://browsenpm.org/help#linkinganynpmpackagelocally)
- [npm-link](https://docs.npmjs.com/cli/link)
- To run the Angular CLI test suite use the node tests/run_e2e.js command. 
- It can also receive a filename to only run that test (e.g. node tests/run_e2e.js tests/e2e/tests/build/dev-build.ts).
- As part of the test procedure, all packages will be built and linked. 
- You will need to re-run npm link to re-link the development Angular CLI environment after tests finish.

# ng command
```bash
$ ng help
ng build <options...>
  Builds your app and places it into the output path (dist/ by default).
  aliases: b
  --target (String) (Default: development) Defines the build target.
    aliases: -t <value>, -dev (--target=development), -prod (--target=production), --target <value>
  --environment (String) Defines the build environment.
    aliases: -e <value>, --environment <value>
  --output-path (Path) Path where output will be placed.
    aliases: -op <value>, --outputPath <value>
  --aot (Boolean) Build using Ahead of Time compilation.
    aliases: -aot
  --sourcemaps (Boolean) Output sourcemaps.
    aliases: -sm, --sourcemap, --sourcemaps
  --vendor-chunk (Boolean) Use a separate bundle containing only vendor libraries.
    aliases: -vc, --vendorChunk
  --common-chunk (Boolean) (Default: true) Use a separate bundle containing code used across multiple bundles.
    aliases: -cc, --commonChunk
  --base-href (String) Base url for the application being built.
    aliases: -bh <value>, --baseHref <value>
  --deploy-url (String) URL where files will be deployed.
    aliases: -d <value>, --deployUrl <value>
  --verbose (Boolean) (Default: false) Adds more details to output logging.
    aliases: -v, --verbose
  --progress (Boolean) (Default: true) Log progress to the console while building.
    aliases: -pr, --progress
  --i18n-file (String) Localization file to use for i18n.
    aliases: --i18nFile <value>
  --i18n-format (String) Format of the localization file specified with --i18n-file.
    aliases: --i18nFormat <value>
  --locale (String) Locale to use for i18n.
    aliases: --locale <value>
  --missing-translation (String) How to handle missing translations for i18n.
    aliases: --missingTranslation <value>
  --extract-css (Boolean) Extract css from global styles onto css files instead of js ones.
    aliases: -ec, --extractCss
  --watch (Boolean) (Default: false) Run build when files change.
    aliases: -w, --watch
  --output-hashing=none|all|media|bundles (String) Define the output filename cache-busting hashing mode.
    aliases: -oh <value>, --outputHashing <value>
  --poll (Number) Enable and define the file watching poll time period (milliseconds).
    aliases: -poll <value>
  --app (String) Specifies app name or index to use.
    aliases: -a <value>, -app <value>
  --delete-output-path (Boolean) (Default: true) Delete output path before build.
    aliases: -dop, --deleteOutputPath
  --preserve-symlinks (Boolean) (Default: false) Do not use the real path when resolving modules.
    aliases: --preserveSymlinks
  --extract-licenses (Boolean) (Default: true) Extract all licenses in a separate file, in the case of production builds only.
    aliases: --extractLicenses
  --show-circular-dependencies (Boolean) (Default: true) Show circular dependency warnings on builds.
    aliases: -scd, --showCircularDependencies
  --build-optimizer (Boolean) (Default: false) (Experimental) Enables @angular-devkit/build-optimizer optimizations when using `--aot`.
    aliases: --buildOptimizer
  --named-chunks (Boolean) Use file name for lazy loaded chunks.
    aliases: -nc, --namedChunks
  --stats-json (Boolean) (Default: false) Generates a `stats.json` file which can be analyzed using tools such as: `webpack-bundle-analyzer` or https://webpack.github.io/analyse.
    aliases: --statsJson

ng completion <options...>
  Adds autocomplete functionality to `ng` commands and subcommands.
  --all (Boolean) (Default: true) Generate a completion script compatible with both bash and zsh.
    aliases: -a, -all
  --bash (Boolean) (Default: false) Generate a completion script for bash.
    aliases: -b, -bash
  --zsh (Boolean) (Default: false) Generate a completion script for zsh.
    aliases: -z, -zsh

ng doc <keyword> <options...>
  Opens the official Angular API documentation for a given keyword.
  --search (Boolean) (Default: false) Search whole angular.io instead of just api.
    aliases: -s, --search

ng e2e <options...>
  Run e2e tests in existing project.
  aliases: e
  --target (String) (Default: development) Defines the build target.
    aliases: -t <value>, -dev (--target=development), -prod (--target=production), --target <value>
  --environment (String) Defines the build environment.
    aliases: -e <value>, --environment <value>
  --output-path (Path) Path where output will be placed.
    aliases: -op <value>, --outputPath <value>
  --aot (Boolean) Build using Ahead of Time compilation.
    aliases: -aot
  --sourcemaps (Boolean) Output sourcemaps.
    aliases: -sm, --sourcemap, --sourcemaps
  --vendor-chunk (Boolean) Use a separate bundle containing only vendor libraries.
    aliases: -vc, --vendorChunk
  --common-chunk (Boolean) (Default: true) Use a separate bundle containing code used across multiple bundles.
    aliases: -cc, --commonChunk
  --base-href (String) Base url for the application being built.
    aliases: -bh <value>, --baseHref <value>
  --deploy-url (String) URL where files will be deployed.
    aliases: -d <value>, --deployUrl <value>
  --verbose (Boolean) (Default: false) Adds more details to output logging.
    aliases: -v, --verbose
  --progress (Boolean) (Default: true) Log progress to the console while building.
    aliases: -pr, --progress
  --i18n-file (String) Localization file to use for i18n.
    aliases: --i18nFile <value>
  --i18n-format (String) Format of the localization file specified with --i18n-file.
    aliases: --i18nFormat <value>
  --locale (String) Locale to use for i18n.
    aliases: --locale <value>
  --missing-translation (String) How to handle missing translations for i18n.
    aliases: --missingTranslation <value>
  --extract-css (Boolean) Extract css from global styles onto css files instead of js ones.
    aliases: -ec, --extractCss
  --watch (Boolean) (Default: false) Run build when files change.
    aliases: -w, --watch
  --output-hashing=none|all|media|bundles (String) Define the output filename cache-busting hashing mode.
    aliases: -oh <value>, --outputHashing <value>
  --poll (Number) Enable and define the file watching poll time period (milliseconds).
    aliases: -poll <value>
  --app (String) Specifies app name or index to use.
    aliases: -a <value>, -app <value>
  --delete-output-path (Boolean) (Default: true) Delete output path before build.
    aliases: -dop, --deleteOutputPath
  --preserve-symlinks (Boolean) (Default: false) Do not use the real path when resolving modules.
    aliases: --preserveSymlinks
  --extract-licenses (Boolean) (Default: true) Extract all licenses in a separate file, in the case of production builds only.
    aliases: --extractLicenses
  --show-circular-dependencies (Boolean) (Default: true) Show circular dependency warnings on builds.
    aliases: -scd, --showCircularDependencies
  --build-optimizer (Boolean) (Default: false) (Experimental) Enables @angular-devkit/build-optimizer optimizations when using `--aot`.
    aliases: --buildOptimizer
  --named-chunks (Boolean) Use file name for lazy loaded chunks.
    aliases: -nc, --namedChunks
  --port (Number) (Default: 0) The port to use to serve the application.
    aliases: -p <value>, -port <value>
  --host (String) (Default: localhost) Listens only on localhost by default.
    aliases: -H <value>, -host <value>
  --proxy-config (Path) Proxy configuration file.
    aliases: -pc <value>, --proxyConfig <value>
  --ssl (Boolean) (Default: false) Serve using HTTPS.
    aliases: -ssl
  --ssl-key (String) (Default: ssl/server.key) SSL key to use for serving HTTPS.
    aliases: --sslKey <value>
  --ssl-cert (String) (Default: ssl/server.crt) SSL certificate to use for serving HTTPS.
    aliases: --sslCert <value>
  --open (Boolean) (Default: false) Opens the url in default browser.
    aliases: -o, -open
  --live-reload (Boolean) (Default: true) Whether to reload the page on change, using live-reload.
    aliases: -lr, --liveReload
  --public-host (String) Specify the URL that the browser client will use.
    aliases: --live-reload-client <value>, --publicHost <value>
  --disable-host-check (Boolean) (Default: false) Don't verify connected clients are part of allowed hosts.
    aliases: --disableHostCheck
  --serve-path (String) The pathname where the app will be served.
    aliases: --servePath <value>
  --hmr (Boolean) (Default: false) Enable hot module replacement.
    aliases: -hmr
  --config (String) Use a specific config file. Defaults to the protractor config file in angular-cli.json.
    aliases: -c <value>, --config <value>
  --specs (Array) (Default: ) Override specs in the protractor config. Can send in multiple specs by repeating flag (ng e2e --specs=spec1.ts --specs=spec2.ts).
    aliases: -sp <value>, --specs <value>
  --element-explorer (Boolean) (Default: false) Start Protractor's Element Explorer for debugging.
    aliases: -ee, --elementExplorer
  --webdriver-update (Boolean) (Default: true) Try to update webdriver.
    aliases: -wu, --webdriverUpdate
  --serve (Boolean) (Default: true) Compile and Serve the app. All non-reload related serve options are also available (e.g. --port=4400).
    aliases: -s, --serve

ng eject <options...>
  Ejects your app and output the proper webpack configuration and scripts.
  --target (String) (Default: development) Defines the build target.
    aliases: -t <value>, -dev (--target=development), -prod (--target=production), --target <value>
  --environment (String) Defines the build environment.
    aliases: -e <value>, --environment <value>
  --output-path (Path) Path where output will be placed.
    aliases: -op <value>, --outputPath <value>
  --aot (Boolean) Build using Ahead of Time compilation.
    aliases: -aot
  --sourcemaps (Boolean) Output sourcemaps.
    aliases: -sm, --sourcemap, --sourcemaps
  --vendor-chunk (Boolean) Use a separate bundle containing only vendor libraries.
    aliases: -vc, --vendorChunk
  --common-chunk (Boolean) (Default: true) Use a separate bundle containing code used across multiple bundles.
    aliases: -cc, --commonChunk
  --base-href (String) Base url for the application being built.
    aliases: -bh <value>, --baseHref <value>
  --deploy-url (String) URL where files will be deployed.
    aliases: -d <value>, --deployUrl <value>
  --verbose (Boolean) (Default: false) Adds more details to output logging.
    aliases: -v, --verbose
  --progress (Boolean) (Default: true) Log progress to the console while building.
    aliases: -pr, --progress
  --i18n-file (String) Localization file to use for i18n.
    aliases: --i18nFile <value>
  --i18n-format (String) Format of the localization file specified with --i18n-file.
    aliases: --i18nFormat <value>
  --locale (String) Locale to use for i18n.
    aliases: --locale <value>
  --missing-translation (String) How to handle missing translations for i18n.
    aliases: --missingTranslation <value>
  --extract-css (Boolean) Extract css from global styles onto css files instead of js ones.
    aliases: -ec, --extractCss
  --watch (Boolean) (Default: false) Run build when files change.
    aliases: -w, --watch
  --output-hashing=none|all|media|bundles (String) Define the output filename cache-busting hashing mode.
    aliases: -oh <value>, --outputHashing <value>
  --poll (Number) Enable and define the file watching poll time period (milliseconds).
    aliases: -poll <value>
  --delete-output-path (Boolean) (Default: true) Delete output path before build.
    aliases: -dop, --deleteOutputPath
  --preserve-symlinks (Boolean) (Default: false) Do not use the real path when resolving modules.
    aliases: --preserveSymlinks
  --extract-licenses (Boolean) (Default: true) Extract all licenses in a separate file, in the case of production builds only.
    aliases: --extractLicenses
  --show-circular-dependencies (Boolean) (Default: true) Show circular dependency warnings on builds.
    aliases: -scd, --showCircularDependencies
  --build-optimizer (Boolean) (Default: false) (Experimental) Enables @angular-devkit/build-optimizer optimizations when using `--aot`.
    aliases: --buildOptimizer
  --named-chunks (Boolean) Use file name for lazy loaded chunks.
    aliases: -nc, --namedChunks
  --force (Boolean) Overwrite any webpack.config.js and npm scripts already existing.
    aliases: --force
  --app (String) Specifies app name to use.
    aliases: -a <value>, -app <value>

ng generate <schematic> <options...>
  Generates and/or modifies files based on a schematic.
  aliases: g
  --dry-run (Boolean) (Default: false) Run through without making any changes.
    aliases: -d, --dryRun
  --force (Boolean) (Default: false) Forces overwriting of files.
    aliases: -f, --force
  --app (String) Specifies app name to use.
    aliases: -a <value>, -app <value>
  --collection (String) Schematics collection to use.
    aliases: -c <value>, --collection <value>
  --lint-fix (Boolean) Use lint to fix files after generation.
    aliases: -lf, --lintFix

ng get <options...>
  Get a value from the configuration. Example: ng get [key]
  --global (Boolean) (Default: false) Get the value in the global configuration (in your home directory).
    aliases: --global

ng help <command-name (Default: all)> <options...>
  Shows help for the CLI.
  --short (Boolean) (Default: false) Display command name and description only.
    aliases: -s, --short

ng lint <options...>
  Lints code in existing project.
  aliases: l
  --fix (Boolean) (Default: false) Fixes linting errors (may overwrite linted files).
    aliases: -fix
  --type-check (Boolean) (Default: false) Controls the type check for linting.
    aliases: --typeCheck
  --force (Boolean) (Default: false) Succeeds even if there was linting errors.
    aliases: --force
  --format (String) (Default: prose) Output format (prose, json, stylish, verbose, pmd, msbuild, checkstyle, vso, fileslist).
    aliases: -t <value>, --format <value>

ng new <options...>
  Creates a new directory and a new Angular app eg. "ng new [name]".
  aliases: n
  --dry-run (Boolean) (Default: false) Run through without making any changes. Will list all files that would have been created when running "ng new".
    aliases: -d, --dryRun
  --verbose (Boolean) (Default: false) Adds more details to output logging.
    aliases: -v, --verbose
  --skip-install (Boolean) (Default: false) Skip installing packages.
    aliases: -si, --skipInstall
  --skip-commit (Boolean) (Default: false) Skip committing the first commit to git.
    aliases: -sc, --skipCommit
  --collection (String) Schematics collection to use.
    aliases: -c <value>, --collection <value>

ng serve <options...>
  Builds and serves your app, rebuilding on file changes.
  aliases: server, s
  --target (String) (Default: development) Defines the build target.
    aliases: -t <value>, -dev (--target=development), -prod (--target=production), --target <value>
  --environment (String) Defines the build environment.
    aliases: -e <value>, --environment <value>
  --output-path (Path) Path where output will be placed.
    aliases: -op <value>, --outputPath <value>
  --aot (Boolean) Build using Ahead of Time compilation.
    aliases: -aot
  --sourcemaps (Boolean) Output sourcemaps.
    aliases: -sm, --sourcemap, --sourcemaps
  --vendor-chunk (Boolean) Use a separate bundle containing only vendor libraries.
    aliases: -vc, --vendorChunk
  --common-chunk (Boolean) (Default: true) Use a separate bundle containing code used across multiple bundles.
    aliases: -cc, --commonChunk
  --base-href (String) Base url for the application being built.
    aliases: -bh <value>, --baseHref <value>
  --deploy-url (String) URL where files will be deployed.
    aliases: -d <value>, --deployUrl <value>
  --verbose (Boolean) (Default: false) Adds more details to output logging.
    aliases: -v, --verbose
  --progress (Boolean) (Default: true) Log progress to the console while building.
    aliases: -pr, --progress
  --i18n-file (String) Localization file to use for i18n.
    aliases: --i18nFile <value>
  --i18n-format (String) Format of the localization file specified with --i18n-file.
    aliases: --i18nFormat <value>
  --locale (String) Locale to use for i18n.
    aliases: --locale <value>
  --missing-translation (String) How to handle missing translations for i18n.
    aliases: --missingTranslation <value>
  --extract-css (Boolean) Extract css from global styles onto css files instead of js ones.
    aliases: -ec, --extractCss
  --watch (Boolean) (Default: true) Rebuild on change.
    aliases: -w, --watch
  --output-hashing=none|all|media|bundles (String) Define the output filename cache-busting hashing mode.
    aliases: -oh <value>, --outputHashing <value>
  --poll (Number) Enable and define the file watching poll time period (milliseconds).
    aliases: -poll <value>
  --app (String) Specifies app name or index to use.
    aliases: -a <value>, -app <value>
  --delete-output-path (Boolean) (Default: true) Delete output path before build.
    aliases: -dop, --deleteOutputPath
  --preserve-symlinks (Boolean) (Default: false) Do not use the real path when resolving modules.
    aliases: --preserveSymlinks
  --extract-licenses (Boolean) (Default: true) Extract all licenses in a separate file, in the case of production builds only.
    aliases: --extractLicenses
  --show-circular-dependencies (Boolean) (Default: true) Show circular dependency warnings on builds.
    aliases: -scd, --showCircularDependencies
  --build-optimizer (Boolean) (Default: false) (Experimental) Enables @angular-devkit/build-optimizer optimizations when using `--aot`.
    aliases: --buildOptimizer
  --named-chunks (Boolean) Use file name for lazy loaded chunks.
    aliases: -nc, --namedChunks
  --port (Number) (Default: 4200) Port to listen to for serving.
    aliases: -p <value>, -port <value>
  --host (String) (Default: localhost) Listens only on localhost by default.
    aliases: -H <value>, -host <value>
  --proxy-config (Path) Proxy configuration file.
    aliases: -pc <value>, --proxyConfig <value>
  --ssl (Boolean) (Default: false) Serve using HTTPS.
    aliases: -ssl
  --ssl-key (String) (Default: ssl/server.key) SSL key to use for serving HTTPS.
    aliases: --sslKey <value>
  --ssl-cert (String) (Default: ssl/server.crt) SSL certificate to use for serving HTTPS.
    aliases: --sslCert <value>
  --open (Boolean) (Default: false) Opens the url in default browser.
    aliases: -o, -open
  --live-reload (Boolean) (Default: true) Whether to reload the page on change, using live-reload.
    aliases: -lr, --liveReload
  --public-host (String) Specify the URL that the browser client will use.
    aliases: --live-reload-client <value>, --publicHost <value>
  --disable-host-check (Boolean) (Default: false) Don't verify connected clients are part of allowed hosts.
    aliases: --disableHostCheck
  --serve-path (String) The pathname where the app will be served.
    aliases: --servePath <value>
  --hmr (Boolean) (Default: false) Enable hot module replacement.
    aliases: -hmr

ng set <options...>
  Set a value in the configuration.
  --global (Boolean) (Default: false) Set the value in the global configuration rather than in your project's.
    aliases: -g, --global

ng test <options...>
  Run unit tests in existing project.
  aliases: t
  --watch (Boolean) Run build when files change.
    aliases: -w, --watch
  --code-coverage (Boolean) (Default: false) Coverage report will be in the coverage/ directory.
    aliases: -cc, --codeCoverage
  --config (String) Use a specific config file. Defaults to the karma config file in .angular-cli.json.
    aliases: -c <value>, --config <value>
  --single-run (Boolean) Run tests a single time.
    aliases: -sr, --singleRun
  --progress (Boolean) (Default: true) Log progress to the console while in progress.
    aliases: --progress
  --browsers (String) Override which browsers tests are run against.
    aliases: --browsers <value>
  --colors (Boolean) Enable or disable colors in the output (reporters and logs).
    aliases: --colors
  --log-level (String) Level of logging.
    aliases: --logLevel <value>
  --port (Number) Port where the web server will be listening.
    aliases: -port <value>
  --reporters (String) List of reporters to use.
    aliases: --reporters <value>
  --sourcemaps (Boolean) (Default: true) Output sourcemaps.
    aliases: -sm, --sourcemap, --sourcemaps
  --poll (Number) Enable and define the file watching poll time period (milliseconds).
    aliases: -poll <value>
  --environment (String) Defines the build environment.
    aliases: -e <value>, --environment <value>
  --app (String) Specifies app name to use.
    aliases: -a <value>, -app <value>

ng version <options...>
  Outputs Angular CLI version.
  aliases: v, --version, -v
  --verbose (Boolean) (Default: false) Adds more details to output logging.
    aliases: --verbose

ng xi18n <options...>
  Extracts i18n messages from source code.
  --i18n-format (String) (Default: xlf) Output format for the generated file.
    aliases: -f <value>, -xmb (--i18n-format=xmb), -xlf (--i18n-format=xlf), --xliff (--i18n-format=xlf), --i18nFormat <value>
  --output-path (Path) (Default: null) Path where output will be placed.
    aliases: -op <value>, --outputPath <value>
  --verbose (Boolean) (Default: false) Adds more details to output logging.
    aliases: --verbose
  --progress (Boolean) (Default: true) Log progress to the console while running.
    aliases: --progress
  --app (String) Specifies app name to use.
    aliases: -a <value>, -app <value>
  --locale (String) Specifies the source language of the application.
    aliases: -l <value>, --locale <value>
  --out-file (String) Name of the file to output.
    aliases: -of <value>, --outFile <value>
```
