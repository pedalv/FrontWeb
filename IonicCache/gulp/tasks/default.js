var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(done){
	runSequence(
		['sass', 'sass-cache'],
		//'',
		done);
});

//gulp.task('default', ['sass', 'sass-cache']);