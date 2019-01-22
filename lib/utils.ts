const readdir = require('recursive-readdir');
import { readFileSync } from 'fs';

const REQUIRE_REGEX = /require\('(.*)'\)/;
const MODULE_REGEX = /from '(.*)'/;

export async function findNodeModules(folder: string) {
  let files = await readdir(folder);
  files = files.filter(
    (x: string) =>
      x.indexOf('node_modules') === -1 &&
      x.indexOf('.min.') === -1 &&
      (x.endsWith('.ts') || x.endsWith('.js'))
  );
  let modules: string[] = [];
  for (const file of files) {
    const text = readFileSync(file, 'utf8');
    let newModules = findImportModule(text).concat(findRequireModule(text));
    modules = modules.concat(newModules);
  }
  // Filter to only include node module
  modules = modules.filter(x => x.search(/^[a-zA-Z0-9@].*[a-zA-Z0-9@]$/) === 0);
  return Array.from(new Set(modules));
}

export function findRequireModule(text: string) {
  return findModule(text, REQUIRE_REGEX);
}

export function findImportModule(text: string) {
  return findModule(text, MODULE_REGEX);
}

export function findModule(text: string, regex: RegExp) {
  const modules: string[] = [];
  const lines = text.replace(/"/g, "'").split('\n');
  for (const line of lines) {
    const match = line.match(regex);
    if (match) {
      modules.push(match[1]);
    }
  }
  return modules;
}
