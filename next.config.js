const {withExpo} = require('@expo/next-adapter')
const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withTM = require('next-transpile-modules')
const webpack = require('webpack')

module.exports = withPlugins(
  [
    withTM(['@react-navigation/stack', '@react-navigation/native', 'react-native-paper']),
    withImages,
    withFonts,
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
