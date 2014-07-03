var fs   = require("fs");
var data = require("./_test/fixtures/api.json");
var docGen = require("./docgen");
var _    = require("lodash");
_.templateSettings.interpolate = /{:([\s\S]+?):}/g;
var methodTemplate = _.template(fs.readFileSync("./_tmp/_api.tmpl.html", "utf-8"));
var mdTemp = _.template(fs.readFileSync("./_docs/api.md", "utf-8"));

var excluded = [
    "use"
];

function getSnippetPath(name) {
    return "./_includes/scripts/api/%s.js".replace("%s", name);
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
 * Process!
 */
var newItems = docGen.prepareClassitems(data.classitems)
    .filter(removeExcluded)
    .map(previewTweaks)
    .reduce(buildMarkup, "");

/**
 * Write the file
 */
fs.writeFileSync("./docs/api.md", mdTemp({data: newItems}));

/**
 * Build the markup for each item
 * @param combined
 * @param item
 * @returns {*}
 */
function buildMarkup (combined, item) {

    item.snippet = null;

    try {
        if (fs.existsSync(getSnippetPath(item.name))) {
            item.snippet = fs.readFileSync(getSnippetPath(item.name), "utf-8");
        }
    } catch (e) {
        console.log(e.message);
    }

    if (!item.description) {
        item.description = "";
    }

    return combined + methodTemplate(item);
}

