"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib = require("../lib/utils");
var chai_1 = require("chai");
describe('test find require module', function () {
    it('finds module from required imports', function () {
        var text = 'const fs = require("fs")\nrequire(\'@decorator/express\')';
        var output = lib.findRequireModule(text);
        chai_1.expect(output.length).to.equal(2);
        chai_1.expect(output[0]).to.equal('fs');
        chai_1.expect(output[1]).to.equal('@decorator/express');
    });
    it('find no module', function () {
        var text = 'import * from "fs"';
        var output = lib.findRequireModule(text);
        chai_1.expect(output).to.be.empty;
    });
});
describe('test find import modules', function () {
    it('finds import module', function () {
        var text = 'import * from "fs"';
        var output = lib.findImportModule(text);
        chai_1.expect(output.length).to.equal(1);
        chai_1.expect(output[0]).to.equal('fs');
    });
    it('finds no module', function () {
        var text = 'const fs = require("fs")';
        var output = lib.findRequireModule('fs');
        chai_1.expect(output).to.be.empty;
    });
});
