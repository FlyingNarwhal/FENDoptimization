var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var imagemin = require('gulp-imagemin');
var minifyCss = require('gulp-minify-css');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('default', () => {
	return gulp.src('views/images/*')
		.pipe(imagemin({
			progressive: true,
		}))
		.pipe(gulp.dest('dist/img'));
});

//maybe pointless, since I've inlined the css
gulp.task('minify-css', function() {
  return gulp.src('*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/'));
});

// minify the js
gulp.task('default', function () {
	gulp.src('views/js/*.js')
		.pipe(jsmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/views/js'));
});