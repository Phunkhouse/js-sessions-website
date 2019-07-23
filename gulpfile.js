const gulp = require('gulp')
const { series, parallel } = require('gulp')
const sass = require('gulp-sass')

const compileSass = () => {
   return gulp
      .src('sass/**/*.+(scss|sass)')
      .pipe(sass())
      .pipe(gulp.dest('css/'))
}

// GULP BUILD TO DIST FOLDER
exports.build = compileSass

// GULP WATCH DEV FOLDER WITH LIVE SERVER
const watch = () => {
   gulp.watch('sass/**/*.+(scss|sass)', compileSass);
}
exports.default = watch