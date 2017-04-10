var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;
var webdriver_standalone = require("gulp-protractor").webdriver_standalone;
var child_process = require('child_process');
var path = require('path');

//TODO
// npm run-script upwebdriver
// npm run-script runwebdriver
// open: http://127.0.0.1:4444/wd/hub/static/resource/hub.html
// run: gulp test-e2e

gulp.task('test-e2e', function(done) {
	gulp.src(["./tests/e2e/**/*.js"])
    	.pipe(protractor({
        	configFile: path.join(process.cwd(), 'config', 'protractor.config.js'),
        	args: ['--baseUrl', 'http://127.0.0.1:8000']
    	}))
        .on('error', function(e) { 
        	console.log(e);
    		//throw e 
    	})
    	.on('end', done);
        
});

// Source
//https://www.npmjs.com/package/gulp-protractor
//https://github.com/angular/protractor#appendix-a-setting-up-a-standalone-selenium-server