var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var path = global.path;

// Minification du fichier javascript
gulp.task('script', function() {
    return gulp.src(path.js + 'main.js')
        .pipe($.plumber())
        .pipe($.uglify())
        .pipe($.rename({suffix: '.min'}))
        .pipe(gulp.dest(path.js))
        .pipe ($.size())
        .pipe(reload({stream:true}));
});