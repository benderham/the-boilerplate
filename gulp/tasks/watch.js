var gulp = require('gulp');
var config = require('../config').watch;

/* watch for key file-changes */
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.images,   ['images']);
  gulp.watch(config.svg,      ['svg']);
  gulp.watch(config.scripts,  ['scripts']);
  gulp.watch(config.sass,     ['scss']);
  gulp.watch(config.html,     ['html']);
});