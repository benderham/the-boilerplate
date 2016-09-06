var gulp = require('gulp');
var config = require('../config').watch;

gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.sass, ['scss']);
  gulp.watch(config.images, ['images']);
  gulp.watch(config.scripts, ['scripts']);
  gulp.watch(config.svg, ['svg']);
});