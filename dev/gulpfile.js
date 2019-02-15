var gulp = require('gulp');
var gzip = require('gulp-gzip');

gulp.task('compress', function() {
    return gulp.src(['./build/**/*.{js,css,html,svg,eot,ttf,woff,woff2}'])
        .pipe(gzip())
        .pipe(gulp.dest('./build'));
});