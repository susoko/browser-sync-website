var gulp        = require("gulp");
var sass        = require("gulp-ruby-sass");
var filter      = require('gulp-filter');
var browserSync = require("browser-sync");

gulp.task('sass', function () {
    gulp.src('scss/styles.scss')
        .pipe(sass({includePaths: ['scss'], sourcemap: true}))
        .pipe(gulp.dest('css'))// Write the CSS & Source maps
        .pipe(filter('**/*.css')) // Filtering stream to only css files
        .pipe(browserSync.reload({stream:true}));
});