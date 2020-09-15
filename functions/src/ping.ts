import * as functions from 'firebase-functions'

export const ping = functions.https.onRequest((_request, response) => {
  response.send('pong')
})
