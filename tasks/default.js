// Require
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var path = global.path;

// Task
gulp.task('build',['sass','script','images']);

gulp.task('default',['build'], function() {
    browserSync({
        server: {
            notify: false,
            server: {baseDir: path.server}

        }
    });

    gulp.watch(path.refresh, reload)
    gulp.watch(path.scss + '**/*.scss', ['sass'])
    gulp.watch(path.js + '**/*.js', ['script'])
    gulp.watch(path.img + '**/*', ['images'])
});