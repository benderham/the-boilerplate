var gulp = require('gulp');
var runSequence = require('run-sequence');

/* dev build process */
gulp.task('build', function(cb) {
  runSequence(
    'svg',
    [
      'images',
      'modernizr',
      'html',
      'scss',
      'scripts',
      'favicons'
    ],
    cb
  );
});

/* production-quality build process */
gulp.task('build:production', function(callback) {
  runSequence(
    'svg',
    [
      'images',
      'modernizr',
      'html',
      'scss',
      'scripts',
      'favicons'
    ],
    [
      'optimize:css',
      'optimize:js'
    ],
    callback
  );
});
