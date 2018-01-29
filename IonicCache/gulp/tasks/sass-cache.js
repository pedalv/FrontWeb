var gulp = require('gulp');
var concat = require('gulp-concat');
//var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('sass-cache', function() {
  return gulp.src('./www/css/scss/*.scss')
	  .pipe(concat('style.css'))
      //.pipe(minifyCss({
        //keepSpecialComments: 0
      //}))
      .pipe(rename({ extname: '.min.css' }))
      .pipe(gulp.dest('./www/css'));
});