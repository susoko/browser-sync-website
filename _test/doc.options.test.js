var _      = require("lodash");
var assert = require("assert");
var docGen = require("../docgen");
var data   = require("./fixtures/api.json");

describe("Modding data", function(){
    var items;
    beforeEach(function () {
        items = docGen.prepareOptions(_.cloneDeep(data.classitems)); // 9 items - 6 with names
    });
    it("should filter options", function(){
        assert.equal(items[0].name, "files");
    });
});

