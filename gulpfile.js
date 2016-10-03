var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

gulp.task('build', function() {
  console.log('building!');
  gulp.src(['js/**/*.js'])
      .pipe(sourcemaps.init())
      .pipe(concat('concat.js'))
      .pipe(uglify())
      .pipe(sourcemaps.write('/'))
      .pipe(gulp.dest('dist'));
})

gulp.task('sass', function() {
  gulp.src('css/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/css'))
})

gulp.task('watch', function() {
  gulp.watch('js/**/*.js', ['build'])
  gulp.watch('css/**/*.scss', ['sass'])
})

gulp.task('default', ['build', 'sass', 'watch'])
// gulp.task('default', ['build', 'sass'])
