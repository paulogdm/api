const {withExpo} = require('@expo/next-adapter')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withTM = require('next-transpile-modules')
const webpack = require('webpack')

module.exports = withPlugins(
  [
    withTM([
      '@ui-kitten/components',
      '@eva-design/eva',
      '@react-navigation/stack',
      '@react-navigation/native',
    ]),
    withImages,
    withExpo,
  ],
  {
    target: 'serverless',
    experimental: {
      modern: true,
      deferScripts: true,
    },
    webpack: (config) => {
      config.plugins.push(
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1,
        })
      )
      return config
    },
  }
)
