var gulp = require('gulp');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');

gulp.task('compile-css', function () {
  return gulp.src('./styl/*.styl')
    .pipe(stylus({ compress: true }))
    .pipe(gulp.dest('./build/css/compiled'));
});

gulp.task('concat-css', function () {
  var sources = [
    './node_modules/bootstrap/dist/css/bootstrap.min.css',
    './node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
    './styl/import/monokai.css',
    './build/css/compiled/*.css'];

  return gulp.src(sources)
    .pipe(concat('site.css'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('default', ['compile-css', 'concat-css']);