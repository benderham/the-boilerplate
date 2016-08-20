var gulp = require('gulp');
var babel = require('gulp-babel');
var config = require('../config');

gulp.task('scripts', function() {
  return gulp.src(config.scripts.src)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(config.scripts.dest))
});
