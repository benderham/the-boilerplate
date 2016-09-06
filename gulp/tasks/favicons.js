var gulp = require('gulp');
var config = require('../config').favicons;

/* copy fonts */
gulp.task('favicons', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});