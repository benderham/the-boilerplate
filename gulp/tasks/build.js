var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(cb) {
  runSequence(
    'svg',
    [
      'modernizr',
      'scss',
      'html',
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
      'html',
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
