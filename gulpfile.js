var gulp = require('gulp');
var htmlreplace = require('gulp-html-replace');
var bundle = require('gulp-bundle-assets');
var gulpCopy = require('gulp-copy');

gulp.task('inject-dependencies', function(){
  return gulp.src('src/index.html')
    .pipe(htmlreplace({
        'css': ['vendor/css/vendor.css','main/css/style.css'],
        'js': ['vendor/js/vendor.js','main/js/script.js']
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('bundle', function() {
  return gulp.src('./bundle.config.js')
    .pipe(bundle())
    .pipe(bundle.results('./')) 
    .pipe(gulp.dest('./dist'));
});


gulp.task('bootstrap-font-copy',function(){
    return gulp.src('./node_modules/bootstrap/dist/fonts/*.*')
        .pipe(gulpCopy('./dist/vendor',{prefix:3}))
});

gulp.task('fontawesome-font-copy',function(){
    return gulp.src('./node_modules/font-awesome/fonts/*.*')
        .pipe(gulpCopy('./dist/vendor',{prefix:2}))
});

gulp.task('font-copy',['bootstrap-font-copy','fontawesome-font-copy']);

gulp.task('default',['bundle','inject-dependencies','font-copy']);


