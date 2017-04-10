# IonicCache
A easy solution to caching http request data.

## Location
IonicCache is located on [https://github.com/pedalv/IonicCache.git](https://github.com/pedalv/IonicCache.git)

## Documentation
Some teory is available on [http://sps.rr-research.no/wiki/Caching.ashx](http://sps.rr-research.no/wiki/Caching.ashx)

## Run project
```bash
- Load all libraries
$ npm install 
$ bower install
- Install plugins and platform
$ ionic state reset 
- Update front-end
$ gulp 
- Run application
$ ionic serve 
```

## Run unit testing
```bash
$ gulp test-unit 
```

## Run e2e testing
```bash
- In shelf 1
$ npm run-script upwebdriver
$ npm run-script runwebdriver
- In chrome
open: http://127.0.0.1:4444/wd/hub/static/resource/hub.html
- In shelf 2
$ gulp test-e2e
```