/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// @ts-check

const fs = require('fs')
const glob = require('fast-glob')
const minifier = require('html-minifier-terser')

/** @type {import('html-minifier-terser').Options} */
const defaultOptions = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: true,
  minifyURLs: true,
  removeComments: true,
  removeEmptyAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true
}

/** @type {import('gatsby').GatsbyNode['onPostBuild']} */
exports.onPostBuild = async ({ reporter }, pluginOptions) => {
  const options = Object.assign(defaultOptions, pluginOptions)
  const matches = await glob('public/**/*.(html|htm)', { onlyFiles: true })

  let preTotal = 0
  let resTotal = 0

  await Promise.all(
    matches.map(async item => {
      const contents = await fs.promises.readFile(item, 'utf8')
      preTotal += contents.length
      const results = minifier.minify(contents, options)
      resTotal += results.length
      await fs.promises.writeFile(item, results)
    })
  )

  const rate = (((preTotal - resTotal) / preTotal) * 100).toFixed(2)
  /** @param {number} bytes */
  const unit = bytes => `${(bytes / 1024 / 1024).toFixed(2)}MB`

  reporter.info(`Minify HTML: [${unit(preTotal)}] → [${unit(resTotal)}] (${rate}%)`)
}
