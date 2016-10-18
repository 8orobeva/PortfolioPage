var gulp = require("gulp"),
    connect = require("gulp-connect"),
    opn = require("opn");

//launch local server
gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true,
        host: 8888
    });
    opn('http://localhost:8888');
});

//html
gulp.task('html', function () {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
});
//css
gulp.task('css', function () {
    gulp.src('./app/css/*.css')
        .pipe(connect.reload());
});
//js
gulp.task('js', function () {
    gulp.src('./app/js/*.js')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['html']);
    gulp.watch(['./app/css/*.css'], ['css']);
    gulp.watch(['./app/js/*.js'], ['js']);
});

gulp.task('default', ['connect', 'watch']);