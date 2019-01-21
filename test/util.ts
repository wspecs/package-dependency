import * as lib from '../lib/utils';
import { expect } from 'chai';

describe('test find require module', () => {
  it('finds module from required imports', () => {
    const text = 'const fs = require("fs")\nrequire(\'@decorator/express\')';
    const output = lib.findRequireModule(text);
    expect(output.length).to.equal(2);
    expect(output[0]).to.equal('fs');
    expect(output[1]).to.equal('@decorator/express');
  });

  it('find no module', () => {
    const text = 'import * from "fs"';
    const output = lib.findRequireModule(text);
    expect(output).to.be.empty;
  });
});

describe('test find import modules', () => {
  it('finds import module', () => {
    const text = 'import * from "fs"';
    const output = lib.findImportModule(text);
    expect(output.length).to.equal(1);
    expect(output[0]).to.equal('fs');
  });

  it('finds no module', () => {
    const text = 'const fs = require("fs")';
    const output = lib.findRequireModule('fs');
    expect(output).to.be.empty;
  });
});
