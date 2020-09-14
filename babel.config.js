require('dotenv-flow').config({silent: true})

const {camelCase} = require('lodash')

const publicEnvsKeys = Object.keys(process.env).filter((envName) => envName.match(/^PUBLIC/))

module.exports = function babelConfig(api) {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
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
          '@ui-kitten/components': {
            transform: (importName) => {
              const caseImport = camelCase(importName)
              const componentName = `${caseImport}.component`

              let importString = `@ui-kitten/components/ui/${caseImport}/${componentName}`

              switch (importName) {
                case 'IndexPath':
                  importString = `@ui-kitten/components/devsupport`
                  break
                case 'ApplicationProvider':
                  importString = `@ui-kitten/components/theme/application/${componentName}`
                  break
                case 'IconRegistry':
                  importString = `@ui-kitten/components/ui/icon/${componentName}`
                  break
                case 'useTheme':
                  importString = '@ui-kitten/components/theme'
                  break
                case 'useStyleSheet':
                  importString = '@ui-kitten/components/theme/style/style.service'
                  break
                case 'withStyles':
                  importString = '@ui-kitten/components/theme/theme/withStyles'
                  break
                case 'TopNavigationAction':
                  importString = `@ui-kitten/components/ui/topNavigation/${componentName}`
                  break
                case 'MenuGroup':
                case 'MenuItem':
                  importString = `@ui-kitten/components/ui/menu/${componentName}`
                  break
                case 'DrawerGroup':
                case 'DrawerItem':
                  importString = `@ui-kitten/components/ui/drawer/${componentName}`
                  break
                case 'TabBar':
                case 'TabView':
                  importString = `@ui-kitten/components/ui/tab/${componentName}`
                  break
                default:
                  break
              }

              return importString
            },
            preventFullImport: true,
            skipDefaultConversion: true,
          },
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
  }
}
