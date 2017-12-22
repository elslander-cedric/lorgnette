const gulp = require('gulp');
const tar = require('gulp-tar');
const gzip = require('gulp-gzip');

gulp.task('compress', function() {
  gulp.src(['./dist/**'])
    .pipe(tar('bundle.tar'))
    .pipe(gzip())
    .pipe(gulp.dest('./dist/'));
});
