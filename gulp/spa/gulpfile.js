const gulp = require('gulp')
const { series, parallel } = require('gulp')

const { appHtml, appCSS, appIMG, appJS } = require('./gulpTasks/app')
const { depsCSS, depsFonts } = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')

const uglifyCSS = require('gulp-uglifycss')
const concat = require('gulp-concat')
const sass = require('gulp-sass')

module.exports.default = series(
    parallel(
        series(appHtml, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)