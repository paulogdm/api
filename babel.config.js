require('dotenv-flow').config({silent: true})

const publicEnvsKeys = Object.keys(process.env).filter((envName) => envName.match(/^PUBLIC/))

const isProduction = process.env.NODE_ENV === 'production'

module.exports = function babelConfig(api) {
  api.cache(isProduction)

  return {
    presets: ['@expo/next-adapter/babel'],
    plugins: [
      ['@babel/plugin-proposal-class-properties', {loose: true}],
      [
        'module-resolver',
        {
          alias: {
            '~': './',
          },
        },
      ],
      [
        'transform-inline-environment-variables',
        {
          include: ['NODE_ENV', ...publicEnvsKeys],
        },
      ],
      [
        'transform-imports',
        {
          lodash: {
            transform: 'lodash/${member}',
            preventFullImport: true,
          },
          '@fortawesome/free-solid-svg-icons': {
            transform: '@fortawesome/free-solid-svg-icons/${member}',
            preventFullImport: true,
            skipDefaultConversion: true,
          },
        },
      ],
    ].filter(Boolean),
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  }
}
