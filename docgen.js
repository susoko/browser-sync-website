var _    = require("lodash");
_.templateSettings.interpolate = /{:([\s\S]+?):}/g;

/**
 * Add an empty array if none exist
 * @param item
 * @returns {*}
 */
function addParams(item) {
    if (!Array.isArray(item.params)) {
        item.params = [];
    }
    return item;
}

/**
 * Use the method/property name to create the preview text
 * @param item
 * @returns {*}
 */
function addPreview (item) {

    if (item.itemtype === "method") {

        if (item.params.length) {
            nameTemplate = ".%s( %p )";
        } else {
            nameTemplate = ".%s()";
        }
    }

    if (item.itemtype === "property") {
        nameTemplate = ".%s";
    }

    if (nameTemplate) {

        var params = item.params.map(function (current) {
            return current.name;
        }).join(", ");

        item.preview = nameTemplate
            .replace("%s", item.name)
            .replace("%p", params);
    }

    return item;
}

/**
 * Ensure only items with a @name property are added
 * @param item
 * @returns {boolean}
 */
function hasNameFilter (item) {
    return !_.isUndefined(item.name);
}

/**
 * Ensure all methods are output before properties
 * @param item
 * @returns {boolean}
 */
function sortItems(item) {
    return item.itemtype !== "method";
}

/**
 * @param item
 * @returns {*}
 */
function escapeParams(item) {

    if (item.params.length) {

        item.params = item.params.map(function (param) {
            param.type = param.type.replace(/\|/g, "\\|");
            return param;
        });
    }
    return item;
}

function isApiMethod(item) {
    return item.module === "BrowserSync";
}

/**
 * Main exported function for preparing view data
 * @param items
 * @returns {*}
 */
function prepareClassitems(items) {
    if (items.length) {
        return items
            .filter(isApiMethod)
            .filter(hasNameFilter)
            .map(addParams)
            .map(addPreview)
            .sort(sortItems);
    }
    return items;
}

function isOption(item) {
    return item.module === "BrowserSync.options";
}
/**
 * Main exported function for preparing view data
 * @param items
 * @returns {*}
 */
function prepareOptions(items) {
    if (items.length) {
        return items
            .filter(isOption);
    }
    return items;
}

module.exports.prepareClassitems = prepareClassitems;
module.exports.prepareOptions = prepareOptions;
