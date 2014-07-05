var fs      = require("fs");
var cp      = require("child_process");
var lib     = "/Users/shakyshane/Sites/os-browser-sync";
var doc     = "/doc/yuidoc.json";
var docGen  = require("./docgen");
var _       = require("lodash");
_.templateSettings.interpolate = /{:([\s\S]+?):}/g;

var mdTemp          = _.template(fs.readFileSync("./_docs/api.md", "utf-8"));
var optTemp         = _.template(fs.readFileSync("./_docs/options.md", "utf-8"));

function getTemplate(name) {

    var source = fs.readFileSync("./_tmp/_%s.tmpl.html".replace("%s", name), "utf-8");
    var template = new Templater(source).process();

    return  _.template(template);
}

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

/**
 * Resolve path to snippets
 * @param name
 * @param path
 * @returns {string}
 */
function getSnippetPath(name, path) {
    return "./_includes/snippets/%p/%s.js".replace("%s", name).replace("%p", path);
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

    return combined + getTemplate("api")(item);
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

    return combined + getTemplate("option")(item);
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

        console.log(snippetPath);

        if (fs.existsSync(snippetPath)) {
            snippet = fs.readFileSync(snippetPath, "utf-8");
        }

    } catch (e) {

        console.log(e.message);

    }

    return snippet;
}

/**
 * @param string
 * @returns {string}
 */
function ifTemplate(string) {

    var regex = /<% if ([a-z].+?) %>/g;
    var regex2 = /<% \/if %>/g;

    this.string = this.string.replace(regex, function () {
        return "<% if ("+arguments[1]+") { %>";
    }).replace(regex2, "<% } %>");


    return this;
}


/**
 * @param string
 * @returns {string}
 */
function eachTemplate() {

    var regex    = /<% loop ([a-zA-Z].+?) as ([a-z].+?) %>/g;
    var regexEnd = /<% \/loop %>/g;

    this.string = this.string.replace(regex, function () {
        return replace(arguments);
    }).replace(regexEnd, "<% }); %>");

    function replace(args) {
        return "<% $1.forEach(function($2){ %>"
            .replace("$1", args[1])
            .replace("$2", args[2]);
    }

    return this;
}

/**
 * @returns {Templater}
 */
function elseTemplate() {

    var regex = /<% else %>/g;

    this.string = this.string.replace(regex, function () {
        return "<% } else { %>";
    });

    return this;
}

var Templater = function (string) {

    this.string = string;
    this.ifTemplate = ifTemplate;
    this.eachTemplate = eachTemplate;
    this.elseTemplate = elseTemplate;

    this.process = function () {

        this.ifTemplate();
        this.elseTemplate();
        this.eachTemplate();

        return this.string;
    };
};

module.exports.Templater = Templater;