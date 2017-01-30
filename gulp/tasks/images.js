var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var config = require('../config');

/* minify the image, in a progressive format */
gulp.task('images', function() {
  return gulp.src(config.image.src)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest(config.image.dest));
});