var fs   = require("fs");
var cp   = require("child_process");
var lib  = "/Users/shakyshane/Sites/os-browser-sync";
var doc  = "/doc/yuidoc.json";
var docGen = require("./docgen");
var _    = require("lodash");
_.templateSettings.interpolate = /{:([\s\S]+?):}/g;
var methodTemplate  = _.template(fs.readFileSync("./_tmp/_api.tmpl.html", "utf-8"));
var optionsTemplate = _.template(fs.readFileSync("./_tmp/_option.tmpl.html", "utf-8"));
var mdTemp          = _.template(fs.readFileSync("./_docs/api.md", "utf-8"));
var optTemp         = _.template(fs.readFileSync("./_docs/options.md", "utf-8"));

var excluded = [
    "use"
];

/**
 * Build docs & run
 */
cp.spawn('gulp', ['docs', '--cwd=' + lib], {stdio: 'inherit'}).on('close', function () {

    var data = require(lib + doc);

    /**
     * Process API
     */
    var apiItems = docGen.prepareClassitems(data.classitems)
        .filter(removeExcluded)
        .map(previewTweaks)
        .reduce(buildMarkup, "");

    fs.writeFileSync("./docs/api.md", mdTemp({data: apiItems}));

    /**
     * Process OPTIONS
     */
    var optItems = docGen.prepareOptions(data.classitems)
        .reduce(optionsMarkup, "");

    fs.writeFileSync("./docs/options.md", optTemp({data: optItems}));
});



function getSnippetPath(name, path) {
    return "./_includes/scripts/%p/%s.js".replace("%s", name).replace("%p", path);
}

/**
 * Don't allow any method that are present in 'excluded' list
 * @param item
 * @returns {*}
 */
function removeExcluded(item) {
    return !_.contains(excluded, item.name);
}

/**
 * Final tweaks to preview snippet
 * @param item
 * @returns {*}
 */
function previewTweaks(item) {
    if (item.name === "browserSync") {
        item.preview = item.preview.replace(".", "");
    }
    return item;
}

/**
 * Build the markup for each item
 * @param combined
 * @param item
 * @returns {*}
 */
function buildMarkup (combined, item) {

    item.snippet = getSnippet(item, "api");

    if (!item.description) {
        item.description = "";
    }

    return combined + methodTemplate(item);
}

/**
 * Build the markup for each item
 * @param combined
 * @param item
 * @returns {*}
 */
function optionsMarkup (combined, item) {

    item.snippet = getSnippet(item, "options");

    if (!item.description) {
        item.description = "";
    }

    return combined + optionsTemplate(item);
}

/**
 * Look for related snippet
 * @param item
 * @param type
 * @returns {*}
 */
function getSnippet(item, type) {

    var snippet = null;

    try {

        var snippetPath = getSnippetPath(item.name, type);

        if (fs.existsSync(snippetPath)) {
            snippet = fs.readFileSync(snippetPath, "utf-8");
        }

    } catch (e) {

        console.log(e.message);

    }

    return snippet;
}