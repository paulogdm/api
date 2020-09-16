const {withExpo} = require('@expo/next-adapter')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withTM = require('next-transpile-modules')

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
    experimental: {
      modern: true,
      deferScripts: true,
    },
  }
)
