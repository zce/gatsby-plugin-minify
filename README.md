# gatsby-plugin-minify

[![Build Status][travis-img]][travis-url]
[![License][license-img]][license-url]
[![NPM Downloads][downloads-img]][downloads-url]
[![NPM Version][version-img]][version-url]
[![Dependency Status][dependency-img]][dependency-url]
[![devDependency Status][devdependency-img]][devdependency-url]
[![Code Style][style-img]][style-url]

> A Gatsby plugin to easily minify all output HTML files.

## Installation

```shell
$ npm install gatsby-plugin-minify

# or yarn
$ yarn add gatsby-plugin-minify
```

## Usage

Include the plugin in your `gatsby-config.js` file.

```javascript
module.exports = {
  plugins: [`gatsby-plugin-minify`]
}
```

### options

If you need to pass options to html-minifier-terser use the plugins options, see [html-minifier-terser](https://github.com/terser/html-minifier-terser#options-quick-reference) docs for all available options.

```javascript
// in gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-minify`,
      options: {
        removeAttributeQuotes: true
        // ...
      }
    }
  ]
}
```

default options:

```javascript
const defaultOptions = {
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: true,
  removeComments: true,
  removeEmptyAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  processConditionalComments: true
}
```

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [汪磊](https://zce.me)



[travis-img]: https://img.shields.io/travis/com/zce/gatsby-plugin-minify
[travis-url]: https://travis-ci.com/zce/gatsby-plugin-minify
[codecov-img]: https://img.shields.io/codecov/c/github/zce/gatsby-plugin-minify
[codecov-url]: https://codecov.io/gh/zce/gatsby-plugin-minify
[license-img]: https://img.shields.io/github/license/zce/gatsby-plugin-minify
[license-url]: https://github.com/zce/gatsby-plugin-minify/blob/master/LICENSE
[downloads-img]: https://img.shields.io/npm/dm/gatsby-plugin-minify
[downloads-url]: https://npm.im/gatsby-plugin-minify
[version-img]: https://img.shields.io/npm/v/gatsby-plugin-minify
[version-url]: https://npm.im/gatsby-plugin-minify
[dependency-img]: https://img.shields.io/david/zce/gatsby-plugin-minify
[dependency-url]: https://david-dm.org/zce/gatsby-plugin-minify
[devdependency-img]: https://img.shields.io/david/dev/zce/gatsby-plugin-minify
[devdependency-url]: https://david-dm.org/zce/gatsby-plugin-minify?type=dev
[style-img]: https://img.shields.io/badge/code_style-standard-brightgreen
[style-url]: https://standardjs.com
