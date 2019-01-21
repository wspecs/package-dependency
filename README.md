<!-- prettier-ignore-start -->
# package-dependency

Find all nodejs dependency for a given directory

![npm](https://img.shields.io/npm/v/package-dependency.svg) ![license](https://img.shields.io/npm/l/package-dependency.svg) ![github-issues](https://img.shields.io/github/issues/wspecs/dependency-finder.svg)

![nodei.co](https://nodei.co/npm/package-dependency.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/wspecs/dependency-finder.svg)
![stars](https://img.shields.io/github/stars/wspecs/dependency-finder.svg)
![forks](https://img.shields.io/github/forks/wspecs/dependency-finder.svg)

![forks](https://img.shields.io/github/forks/wspecs/dependency-finder.svg)

![](https://david-dm.org/wspecs/dependency-finder/status.svg)
![](https://david-dm.org/wspecs/dependency-finder/dev-status.svg)

## Features

- Find all nodejs dependency for a given directory

## Usage

```bash
tsm-starter
> ✔ Name of the package … name-of-the-package
> ✔ Description of the package … Descriptionm for the package
> ✔ License type … MIT
> ✔ What's your name? … Author's Name
> ✔ What's your email? … Author's Email
> ✔ What's your website url? … Author's Url
> ✔ What's your GitHub repo? … Author's GitHub Repo
```

## Install

`npm install --save package-dependency`

Or as binary

``npm install --g package-dependency`

## Scripts

 - **npm run build** : `rm -rf dist && tsc && npm run readme`
 - **npm run readme** : `node ./node_modules/.bin/node-readme`
 - **npm run test** : `mocha ./dist/test/*.js`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[commander](https://www.npmjs.com/package/commander) | ^2.19.0 | ✖
[great-logs](https://www.npmjs.com/package/great-logs) | 0.0.4 | ✖
[recursive-readdir](https://www.npmjs.com/package/recursive-readdir) | ^2.2.2 | ✖
[shelljs](https://www.npmjs.com/package/shelljs) | ^0.8.3 | ✖
[@types/chai](https://www.npmjs.com/package/@types/chai) | ^4.1.3 | ✔
[@types/mocha](https://www.npmjs.com/package/@types/mocha) | ^5.2.0 | ✔
[@types/node](https://www.npmjs.com/package/@types/node) | ^10.0.2 | ✔
[chai](https://www.npmjs.com/package/chai) | ^4.2.0 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^5.1.1 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔


## Contributing

Please check the [Contributing Guidelines](contributing.md) for more details. Thanks!

## Author

[Wendly Saintil](https://twitter.com/wendlysaintil)

## License

[MIT](LICENSE)
<!-- prettier-ignore-end -->
