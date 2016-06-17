import gulp from 'gulp';
import eslint from 'gulp-eslint';
import babel from 'gulp-babel';
import babel_register from 'babel-register';

//linting task
gulp.task('lint',() => {
  return gulp.src(['client/**/*.js','server/**/*.js'])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
});

//watching task
// gulp.task('watch', () => {
//   gulp.watch('*.js',['lint']);
// });