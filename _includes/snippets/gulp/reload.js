// start server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

// process JS files and reload all browsers when complete.
gulp.task('js', function () {
    return gulp.src('js/*js')
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({stream:true, once: true}));
});

// use default task to launch BrowserSync and watch JS files
gulp.task('default', ['browser-sync'], function () {
    gulp.watch("js/*.js", ['js']);
});