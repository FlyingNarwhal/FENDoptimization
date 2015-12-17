var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var imagemin = require('gulp-imagemin');
var imageminJpegtran = require('imagemin-jpegtran')
var minifyCss = require('gulp-minify-css');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');

//makes it easy to deploy the production code
//to github. #buildprocess
gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});


// imagemin to compress images, namely pizzeria.jpg
// since it was so stinking big and awkward to only
// take up a thumbnail size area!
gulp.task('default', () => {
	return gulp.src('views/images/*.jpg')
		.pipe(imageminJpegtran({progressive: true})())
    .pipe(gulp.dest('dist/views/images'));
});

//maybe pointless, since I've inlined the css
//for production, but still nice to have.
gulp.task('minify-css', function() {
  return gulp.src('*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/'));
});

// minify the js for production use only. Gotta
// save some bytes at runtime
gulp.task('default', function () {
	gulp.src('views/js/*.js')
		.pipe(jsmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/views/js'));
});