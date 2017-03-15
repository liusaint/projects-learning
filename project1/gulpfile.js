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



//用于压缩和连接
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
gulp.task('mergecommon', function () {
    gulp.src(['build/js/lib/tip.js', 'build/js/load_page.js', 'build/js/common.js'])
    .pipe(uglify({mangle:true}))
    .pipe(concat('build/js/lib/common.min.js'))
    .pipe(gulp.dest(''));  //公共模块压缩 
})


// var webpack = require('gulp-webpack');
// var webpackConfig = require("./webpack.config.js");
// gulp.task('webpack', function () {
//     var myConfig = Object.create(webpackConfig);
//     return gulp
//         .src('./src/main.js')
//         .pipe(webpack(myConfig))
//         .pipe(gulp.dest('./build'));
// });