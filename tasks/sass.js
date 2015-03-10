var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var path = global.path;
var browser_support = global.browser_support;

// Compilation des fichiers Sass dans le fichier
// style.css à la racine du dossier et minification du fichier
gulp.task('sass', function () {
    return gulp.src(path.scss + '**/*.scss')
        .pipe($.plumber())
        .pipe($.sass({onError: console.error.bind(console, 'SASS Error:')}))
        .pipe($.autoprefixer({browsers: browser_support}))
        .pipe(gulp.dest(path.css))
        .pipe($.minifyCss())
        .pipe(gulp.dest(path.css))
        .pipe ($.size())
        .pipe(reload({stream:true}));
});