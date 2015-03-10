var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var path = global.path;

gulp.task('images', function() {
  return gulp.src(path.img + 'src/**/*')
    .pipe($.imagemin({
        progressive: true,
        interlaced: true,
        svgoPlugins: [
            {removeViewBox:false},
            {removeUselessStrokeAndFill:false}
        ]
    }))
    .pipe(gulp.dest(path.img))
    .pipe ($.size())
    .pipe(reload({stream:true}));
});