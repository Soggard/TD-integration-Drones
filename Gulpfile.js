
"use strict"

var gulp = require("gulp");
var p = require("gulp-load-plugins")();
const production = !!p.util.env.production;
const del = require('del');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(p.compass({
            css: 'css',
            sass: 'sass',
            sourcemaps: !production,
            environment: production? "production" : "development"
        }))
        .pipe(p.if(production, p.cleanCss({compatibility: 'ie9'})))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['clean', 'sass', 'script'], function () {
    gulp.watch('./sass/**/*.sass', ['sass']);
    gulp.watch('./js/**/*.js', ['script']);
});

gulp.task("default", ['clean', 'sass', 'script']);

gulp.task("script", function () {
    gulp.src('./js/**/*.js')
        .pipe(p.concat('scripts.js'))
        .pipe(p.if(production, p.uglify()))
        .pipe(gulp.dest('./dist'))
});

gulp.task("clean", function () {
    return del([
        'dist/*',
        'css/*'
    ])
});

