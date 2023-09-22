'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concatCss = require('gulp-concat-css');


function defaultTask() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concatCss("style.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
}

exports.default = defaultTask