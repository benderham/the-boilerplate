var gulp = require('gulp');
var config = require('../config');

/* copy forward to output */
gulp.task('html', function(){
  return gulp.src(config.html.src)
    .pipe(gulp.dest(config.html.dest));
});