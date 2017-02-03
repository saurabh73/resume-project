var gulp  = require('gulp');
var gutil = require('gulp-util');
var inject = require('gulp-inject');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


//gulp.task('index', function () {
//  var target = gulp.src('./src/index.html');
//  // It's not necessary to read the files (will speed up things), we're only after their paths: 
//  var sources = gulp.src(['./src/js/*.js', './src/css/*.css'], {read: false});
// 
//  return target.pipe(inject(sources))
//    .pipe(gulp.dest('./src'));
//});

var appStream = gulp.src(['./src/js/*.js'])
                  .pipe(concat('script.min.js'))
                  .pipe(uglify())
                  .pipe(gulp.dest('./dist'));



gulp.task('default', function(){
    return gulp.src('./src/index.html')
        .pipe(inject(appStream))
        .pipe(gulp.dest('./dist'));
});

