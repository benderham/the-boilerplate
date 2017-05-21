var gulp = require('gulp');
var config = require('../config').rootFiles;

/**
 * Copy fonts to folder
 */
gulp.task('root-files', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
})