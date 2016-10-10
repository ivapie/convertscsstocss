'use strict';
let gulp = require("gulp");
let cleanCSS = require("gulp-clean-css");
let concat = require("gulp-concat");
var dedupe = require('gulp-dedupe');
let sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./components/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(dedupe())
        .pipe(cleanCSS({debug: true}, function(details){
            console.log(details);
        }))
        .pipe(gulp.dest('build/'));
});
