var gulp = require('gulp');

// minify css
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');

// minify js
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('scripts', function(){
	return gulp.src('src/js/*js')
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(notify({message: 'js minifed!'}));
});

gulp.task('css', function(){
	return gulp.src('src/css/main.css')
		.pipe(autoprefixer('last 15 version'))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/css'))
		.pipe(notify({message: 'css minified!'}));
});




gulp.task('default', function(){
	gulp.run('css');
	gulp.run('scripts');

	gulp.watch('src/css/*.css', function(){
		gulp.run('css');
	});

	gulp.watch('src/js/*.js', function(){
		gulp.run('scripts')
	});

	// Another way to do it
	// gulp.watch('src/*.{js, coffee}', ['scripts']);
});