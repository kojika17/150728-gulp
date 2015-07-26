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
gulp.task('タスク名', function() {
  gulp.src('タスクを行うファイル')
    .pipe(gulp.dest('タスク後の出力先'))
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
    './assets/stylus/**/*.styl', 
    'build:css');
});


// 開発
gulp.task('default', ['build:css', 'bs', 'watch']);