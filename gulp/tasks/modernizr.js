var gulp   = require('gulp');
var modernizr = require('gulp-modernizr');
var config = require('../config').modernizr;

gulp.task('modernizr', function() {
  gulp.src(config.src)
    .pipe(modernizr(config.options))
    .pipe(gulp.dest(config.dest))
});