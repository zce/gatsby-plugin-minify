/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// @ts-check

const fs = require('fs')
const glob = require('fast-glob')
const minifier = require('html-minifier')

/** @type {import('html-minifier').Options} */
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

/** @type {import('gatsby').GatsbyNode['onPostBuild']} */
exports.onPostBuild = async (_, pluginOptions) => {
  const options = Object.assign(defaultOptions, pluginOptions)
  const matches = await glob('public/**/*.html', { onlyFiles: true })
  await Promise.all(
    matches.map(async item => {
      const contents = await fs.promises.readFile(item, 'utf8')
      const results = minifier.minify(contents, options)
      return fs.promises.writeFile(item, results)
    })
  )
}
