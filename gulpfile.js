// Include gulp
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
// var path = require('path');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
	return gulp.src('./assets/sass/main.scss')
	.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.init())
			//.pipe(sass({outputStyle: 'compressed'})) // minified
			.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./assets/sass'));
});

// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch']);