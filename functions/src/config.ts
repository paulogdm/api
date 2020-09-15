import * as functions from 'firebase-functions'

const config = functions.config() || {}

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  config.env = require('../../env.json')
}

export default config.env
