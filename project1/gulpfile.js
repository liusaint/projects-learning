var gulp    = require('gulp');

//用于less的处理
var minifyCss = require('gulp-minify-css');
var less = require('gulp-less');
var watchLess = require('gulp-watch-less');

//默认任务
gulp.task('default', function () {
    gulp.start('testWatch');
});



//less定时任务
gulp.task('testLess', function () {
    gulp.src(['src/less/*.less'])
        .pipe(less())
        .pipe(gulp.dest('build/css'));
});

gulp.task('testWatch', function () {
    gulp.watch('src/less/*.less', ['testLess']); //当所有less文件发生改变时，调用testLess任务
});