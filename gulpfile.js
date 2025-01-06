const { src, dest, watch, parallel } = require('gulp');

// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require("gulp-plumber");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");

// IMG
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");

// JS
const terser = require("gulp-terser");

function css(done) {
    src("src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass () )
    .pipe( postcss([autoprefixer(), cssnano()] ) )
    .pipe(sourcemaps.write("."))
    .pipe( dest("build/css") )

    done();
}

function imagenes(done) {
    
    const opciones = {
        optimizationLevel: 3
    };

    src("src/img/**/*.{png,jpg,jpeg}")
        .pipe( cache(imagemin(opciones)) )
        .pipe( dest("build/img") )
    
        done();
}

function versionWebp(done) {
    
    const opciones = {
        quality: 60
    };

    src("src/img/**/*.{png,jpg,jpeg}")
        .pipe( webp(opciones) )
        .pipe( dest("build/img") )
    
        done();
}

function javascript(done) {
    src("src/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe( terser() )
    .pipe(sourcemaps.write("."))
        .pipe( dest("build/js"))

    done();
}

function dev(done) {
    watch("src/scss/**/*.scss", css);
    watch("src/js/**/*.js", javascript); // el **/* es para que busque todas las carpetas
    
    done();
}

exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.dev = parallel( imagenes,versionWebp, javascript, dev );