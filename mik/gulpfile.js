//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    cssmin = require('gulp-minify-css'), //压缩css
    sourcemaps = require('gulp-sourcemaps'), //方便查找less文件
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    htmlmin = require('gulp-htmlmin'),
    less = require('gulp-less');

gulp.task('less', function () {
    gulp.src(['src/less/*.less']) //多个文件以数组形式传入
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        }))
        .pipe(less())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('src/build/style'))
        .pipe(livereload()); //将会在src/css下生成index.css以及detail.css 
});
gulp.task('minify', () => {
    return gulp.src('./index.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('src/build'));
});

gulp.task('default', function () {
    livereload.listen()
    gulp.watch('src/less/*.less', ['less'])
}); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径