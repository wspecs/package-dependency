#!/usr/bin/env node

const app = require('../dist/index');
const program = require('commander');
const fs = require('fs');
const log = require('great-logs');
const shell = require('shelljs');

const EXCLUDED_MODULES = new Set(['fs', 'os', 'crypto']);
const APP_FOLDER = `${__dirname}/..`;
const PACKAGE_INFO = JSON.parse(fs.readFileSync(`${APP_FOLDER}/package.json`));

program
  .version(PACKAGE_INFO.version)
  .command('update')
  .description(
    'Update package.json with all the node module found the project path'
  )
  .action(async () => {
    const package = JSON.parse(fs.readFileSync(`./package.json`, 'utf8'));
    const modules = await findModules();
    logModules(modules);
    for (const mod of modules) {
      if (EXCLUDED_MODULES.has(mod)) continue;
      if (package.dependencies[mod] || package.devDependencies[mod]) {
        continue; // Module is already found;
      }
      shell.exec(`npm i ${mod} --save`);
      log.info('Adding new module %s to package.json', mod);
    }
    log.info('Dependencies finder finished updates');
  });

program
  .command('clean')
  .description('Remove unsued module from package.json')
  .action(async () => {
    const package = JSON.parse(fs.readFileSync(`./package.json`, 'utf8'));
    const modules = new Set(await findModules());
    logModules(modules);
    for (const mod of Object.keys(package.dependencies)) {
      if (!modules.has(mod)) {
        delete package.dependencies[mod];
        log.info('Removed new module %s to package.json', mod);
      }
    }
    const packageText = JSON.stringify(package, null, 2);
    fs.writeFileSync('package.json', packageText, 'utf8');
    log.info('Dependencies finder cleaned package.json');
  });

program.parse(process.argv);

async function findModules() {
  return await app.findNodeModules('./');
}

async function logModules(modules) {
  modules = modules || (await findModules());
  log.info('This are the depencies found by dependency-finder');
  for (const mod of modules) {
    log.info(`- %s`, mod);
  }
}

if (process.argv.length === 2) {
  logModules();
}
