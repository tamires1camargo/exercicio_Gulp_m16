const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImages() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./build/styles'));
}


function funcaoPadrao(callback) {
    console.log("Exercicio da aula Gulp");
    callback();
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeImages));
}
