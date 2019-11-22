# gatsby-plugin-minify

[![NPM Downloads][downloads-image]][downloads-url]
[![NPM Version][version-image]][version-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> A Gatsby plugin to easily minify all result.

## Installation

```shell
$ yarn add gatsby-plugin-minify

# or npm
$ npm install gatsby-plugin-minify
```

## Usage

Include the plugin in your `gatsby-config.js` file.

```js
plugins: [`gatsby-plugin-minify`]
```

### options

If you need to pass options to html-minifier use the plugins options, see [html-minifier](https://github.com/kangax/html-minifier#options-quick-reference) docs for all available options.

```js
// in gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-minify`,
    options: {
      removeAttributeQuotes: true
      // ...
    }
  }
]
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



[downloads-image]: https://img.shields.io/npm/dm/gatsby-plugin-minify.svg
[downloads-url]: https://npmjs.org/package/gatsby-plugin-minify
[version-image]: https://img.shields.io/npm/v/gatsby-plugin-minify.svg
[version-url]: https://npmjs.org/package/gatsby-plugin-minify
[license-image]: https://img.shields.io/github/license/zce/gatsby-plugin-minify.svg
[license-url]: https://github.com/zce/gatsby-plugin-minify/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/zce/gatsby-plugin-minify.svg
[dependency-url]: https://david-dm.org/zce/gatsby-plugin-minify
[devdependency-image]: https://img.shields.io/david/dev/zce/gatsby-plugin-minify.svg
[devdependency-url]: https://david-dm.org/zce/gatsby-plugin-minify?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: https://standardjs.com
