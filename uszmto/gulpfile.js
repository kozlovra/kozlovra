const fileinclude = require('gulp-file-include');
const gulp = require('gulp');

gulp.task('default', async function() {
  gulp.src(['template/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});