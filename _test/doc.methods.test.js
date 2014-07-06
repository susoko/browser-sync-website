var _      = require("lodash");
var assert = require("assert");
var docGen = require("../docgen");
var data   = require("./fixtures/api.json");

describe("Modding data", function(){
    var items;
    beforeEach(function () {
        items = docGen.prepareClassitems(_.cloneDeep(data.classitems)); // 9 items - 6 with names
    });
    it("should filter classsitems for those with names", function(){
        assert.deepEqual(items.length, 7);
        assert.equal(items[0].name, "browserSync");
    });
    it("should add a 'preview' property to methods", function(){
        var reload = _.find(items, {name: "reload"});
        assert.equal(reload.itemtype, "method");
        assert.equal(reload.preview, ".reload( arg )")
    });
    it("should add a 'preview' property to methods (2)", function(){
        var reload = _.find(items, {name: "use"});
        assert.equal(reload.itemtype, "method");
        assert.equal(reload.preview, ".use( name, module, cb )")
    });

    it("should add escape chars to param types", function(){
        var reload = _.find(items, {name: "reload"});
        assert.equal(reload.params[0].type, "String | Array | Object");
    });
    it("should add params empty array if not exists", function(){
        var active = _.find(items, {name: "active"});
        assert.equal(active.name, "active");
        assert.equal(active.itemtype, "property");
        assert.equal(active.preview, ".active");
    });

    it("should extract options", function () {
        var string = '.option("--no-online", "Force offline usage");';
        var expected = { name: "--no-online", description: "Force offline usage" };
        var actual = docGen.extractOptions(string);
        assert.deepEqual(actual[0], expected);
    });
});

