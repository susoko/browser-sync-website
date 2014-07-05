var _      = require("lodash");
var assert = require("assert");
var docGen = require("../docgen");
var data   = require("./fixtures/api.json");
var templates = require("../makeDocs");

describe("Modding data", function(){
    var items;
    beforeEach(function () {
        items = docGen.prepareOptions(_.cloneDeep(data.classitems)); // 9 items - 6 with names
    });
    it("should filter options", function(){
        assert.equal(items[0].name, "files");
    });
    it("should handle single level options", function () {
        assert.equal(items[0].defaultValue, "false");
    });
    it("should handle multi-level options", function () {
        var ghost = items.filter(function (item) {
            return item.name === "ghostMode";
        });
        assert.equal(ghost[0].subprops[0].defaultValue, "true");
    });
});

describe("simple template", function () {
    it("if ", function () {
        var value     = "<% if subprops %>werg\n<% /if %>";

        var actual = new templates.Templater(value).process();
        var expected  = "<% if (subprops) { %>werg\n<% } %>";

        assert.equal(actual, expected);
    });
    it("if else ", function () {

        var value = "<% if subprops %>shane<% else %>kittie<% /if %>";

        var actual = new templates.Templater(value).process();

        var expected = "<% if (subprops) { %>shane<% } else { %>kittie<% } %>";
        assert.equal(actual, expected);

    });
});

describe("EACH template", function () {
    it("single foreach", function () {

        var value = "shane<% loop subprops as item %>shane<% /loop %>Kittie";
        var actual = new templates.Templater(value).process();
        var expected = "shane<% subprops.forEach(function(item){ %>shane<% }); %>Kittie";

        assert.equal(actual, expected);
    });
    it("each with nested if", function () {

        var value = "<% loop subprops as item %><% if name %>Kittie<% /if %><% /loop %>";
        var actual = new templates.Templater(value).process();
        var expected = "<% subprops.forEach(function(item){ %><% if (name) { %>Kittie<% } %><% }); %>";

        assert.equal(actual, expected);
    });
});