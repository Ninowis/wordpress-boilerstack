var gulp = require('gulp');
var run = require('gulp-run');
var zip = require('gulp-zip');

require('dotenv').config()

var THEME_PATH = process.env.THEME_PATH;
var THEME_TEXT_DOMAIN = process.env.THEME_TEXT_DOMAIN;

gulp.task('build', function() {
  return run('cd ' + THEME_PATH + ' && npm run build').exec()
  ;
});

gulp.task('zip', function() {
  return gulp.src([
      THEME_PATH + '/**/*',
      '!' + THEME_PATH + '/node_modules{,/**}',
      '!' + THEME_PATH + '/sass{,/**}',
      '!' + THEME_PATH + '/**/*.scss',
      '!' + THEME_PATH + '/**/*.git',
    ])
    .pipe(zip(THEME_TEXT_DOMAIN + '.zip'))
    .pipe(gulp.dest('dist'));
});

gulp.task('update', function() {
  return gulp.src([
      THEME_PATH + '/**/*',
      '!' + THEME_PATH + '/node_modules{,/**}',
      '!' + THEME_PATH + '/sass{,/**}',
      '!' + THEME_PATH + '/**/*.scss',
      '!' + THEME_PATH + '/**/*.git',
    ])
    .pipe(gulp.dest('wp-content/themes/' + THEME_TEXT_DOMAIN));
});

gulp.task('watch', function(){
	gulp.watch([
      THEME_PATH + '/**/*.css',
      THEME_PATH + '/**/*.js',
      THEME_PATH + '/**/*.php',
		], ['update']);
});