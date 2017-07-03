const path = require('path')
const webpackConfig = require('./webpack.config.test')

module.exports = function(config) {
  const baseConfig = {
    basePath: path.resolve(__dirname, '../test'),

    frameworks: ['mocha'],

    files: [
      { pattern: '**/*.spec.js', watched: false }
    ],

    preprocessors: {
      '**/*.spec.js': ['webpack']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity
  }

  if (process.env.TRAVIS) {
    baseConfig.browsers = ['ChromeHeadlessTravis']
    baseConfig.customLaunchers = {
      ChromeHeadlessTravis: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    }
  }

  config.set(baseConfig)
}
