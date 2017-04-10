var gulp = require('gulp');
var KarmaServer = require('karma').Server;
var path = require('path');

gulp.task('test-unit', ['default'], function(done){
	new KarmaServer({
    	configFile: path.join(process.cwd(), 'config', 'karma.conf.js'),
		singleRun: false,
		browsers: ['Chrome'],
		reporters: ['dots']
	}, done).start();
});