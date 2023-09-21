'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function defaultTask() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
}

exports.default = defaultTask