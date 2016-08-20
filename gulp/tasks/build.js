var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function(cb) {
  runSequence(
    'svg',
    [
      'modernizr',
      'scss',
      'pug',
      'scripts',
      'images',
      'favicons'
    ],
    cb
  );
});

gulp.task('build:production', function(callback) {
  runSequence(
    'svg',
    [
      'modernizr',
      'scss',
      'pug',
      'scripts',
      'images',
      'favicons'
    ],
    [
      'optimize:css',
      'optimize:js'
    ],
    callback
  );
});
