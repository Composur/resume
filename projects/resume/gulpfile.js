var gulp        = require("gulp");
var less = require('gulp-less');
var browserSync = require("browser-sync").create();
var reload      = browserSync.reload;
// 静态服务器 + 监听 scss/html 文件


gulp.task('less', function () {
    return gulp.src('src/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('src/css'));
});


gulp.task('default', ['less'], function() {

  browserSync.init({
      server: "./"
  });

  gulp.watch("src/**/*.less", ['less']);
  gulp.watch("*.html").on('change', reload);
  gulp.watch("src/**/*.js").on('change', reload);
});