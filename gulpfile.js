var gulp        = require("gulp");
var browserSync = require("browser-sync");
var plumber     = require('gulp-plumber');
var sass        = require("gulp-ruby-sass");
var jshint      = require("gulp-jshint");
var minifyCSS   = require("gulp-minify-css");
var rename      = require("gulp-rename");
var prefix      = require("gulp-autoprefixer");
var cp          = require("child_process");

var messages = {
    jekyllBuild: "<span style=\"color: grey\">Running:</span> $ jekyll build"
};

var jekylArgs = ["build", "--config", "_config.yml"];

function getjekyllArgs(cb, env) {

    var args = jekylArgs;

    if (env === "prod" ) {
        var newconfig = [args.pop(), "_config-dev.yml"].join(",");
        args.push(newconfig);
    }

    return cp.spawn("jekyll", args, {stdio: "inherit"}).on("close", cb);
}

/**
 * Build documentation
 */
gulp.task("docs-build", function (cb) {
    return cp.spawn("node", ["_makeDocs"], {stdio: "inherit"}).on("close", cb);
});

/**
 * Build the Jekyll Site
 */
gulp.task("jekyll-build", ["docs-build"],  function (done) {
    browserSync.notify(messages.jekyllBuild);
    return getjekyllArgs(done);
});

/**
 * Build the Jekyll Site
 */
gulp.task("jekyll-build-dev", function (done) {
    browserSync.notify(messages.jekyllBuild);
    return getjekyllArgs(done, "prod");
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task("jekyll-rebuild", ["jekyll-build-dev"], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task("browser-sync", ["sass", "jekyll-build-dev"], function() {
    browserSync({
        server: {
            baseDir: "_site"
        },
        online: false,
        open: false
    });
});

var sassError = function (obj) {
    browserSync.notify(obj.message);
};

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task("sass", function () {
    browserSync.notify("Compiling SASS...");
    gulp.src("_scss/core.scss")
        .pipe(plumber({errorHandler: sassError}))
        .pipe(sass())
        .pipe(prefix(["last 15 versions", "> 1%", "ie 8", "ie 7"], { cascade: true }))
        .pipe(gulp.dest("_site/css"))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest("css"))
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(rename("core.min.css"))
        .pipe(gulp.dest("css"));
});

/**
 * Lint code snippets
 */
gulp.task("lint", function () {
    gulp.src(["_includes/snippets/**/*.js", "gulpfile.js"])
        .pipe(jshint(".jshintrc"))
        .pipe(jshint.reporter("default"))
        .pipe(jshint.reporter("fail"));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task("watch", function () {
    gulp.watch("_scss/**/*.scss", ["sass"]);
    gulp.watch([
        "**.html",
        "_layouts/*.html",
        "_posts/*",
        "docs/*",
        "*.md",
        "_plugins/*",
        "_includes/**/*",
        "_config.yml"
    ], ["jekyll-rebuild"]);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task("default", ["browser-sync", "watch"]);

gulp.task("build", ["sass", "docs-build", "jekyll-build"]);
