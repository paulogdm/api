import * as functions from 'firebase-functions'

// eslint-disable-next-line import/no-mutable-exports
let config = (functions.config() || {}).env ?? {}

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require, import/no-unresolved
  config = require('../env.json')
}

export default config
