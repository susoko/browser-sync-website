var _      = require("lodash");
var assert = require("assert");
var docGen = require("../docgen");
var data      = require("./fixtures/api.json");

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