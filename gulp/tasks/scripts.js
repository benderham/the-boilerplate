var gulp = require('gulp');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');
var config = require('../config');

/* lint js, with es2015 linting */
gulp.task('scripts', function() {
  return gulp.src(config.scripts.src)
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(config.scripts.dest));
});
