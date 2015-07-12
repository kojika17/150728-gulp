'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var stylus = require('gulp-stylus');

// Test
gulp.task('test', function() {
  console.log('gulpfile test')
});

// BrowserSync & Server
gulp.task('bs', function() {
  browserSync({
    server: {
      baseDir: './public/'
    }
  });
});

/**
 * Build
 */
gulp.task('build:html', function() {
  gulp.src('./assets/**/*.html')
    .pipe(gulp.dest('./public/'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('build:css', function() {
  gulp.src('./assets/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./public/css/'))
    .pipe(browserSync.reload({ stream: true }));
});


/**
 * Watch
 */
gulp.task('watch', function() {
  gulp.watch(
    './assets/**/*.html', 
    ['build:html']);

  gulp.watch(
    './assets/stylus/**/*.styl', 
    ['build:css']);
});


// 開発
gulp.task('default', ['build:html', 'build:css', 'bs', 'watch']);