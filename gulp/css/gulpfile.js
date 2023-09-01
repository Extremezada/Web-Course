const {series} = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const {parallel} = require('gulp')
const { transform } = require('lodash')

function transformacaoCSS(){
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglyComments": true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHTLM(){
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('build/css'))
}

exports.default = parallel(copiarHTLM, transformacaoCSS)
