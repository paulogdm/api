import * as functions from 'firebase-functions'

const config = functions.config() || {}

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require, import/no-unresolved
  config.env = require('../env.json')
}

export default config
