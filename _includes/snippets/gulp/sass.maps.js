//other necessary packages
var filter = require('gulp-filter');

gulp.task('sass', function () {
    gulp.src('scss/styles.scss')
        .pipe(sass({includePaths: ['scss'], sourcemap: true}))
        .pipe(gulp.dest('css'))
        .pipe(filter('**/*.css')) // Filtering stream to only css files
        .pipe(browserSync.reload({stream:true}));
});