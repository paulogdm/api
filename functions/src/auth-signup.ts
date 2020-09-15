import 'isomorphic-fetch'
import admin from 'firebase-admin'
import * as functions from 'firebase-functions'
import {GraphQLClient} from 'graphql-request'

import config from './config'
import gql from './gql'

// On sign up.
export const authSignup = functions.auth.user().onCreate(async (firebaseUser) => {
  const client = new GraphQLClient(config.hasura.url, {
    headers: {
      'content-type': 'application/json',
      'x-hasura-admin-secret': config.hasura.adminSecret,
    },
  })

  const {uid: firebaseId, email, displayName: name, emailVerified} = firebaseUser

  const query = gql`
    mutation(
      $firebaseId: String!
      $email: String!
      $emailVerified: Boolean!
      $name: String!
      $firebaseUser: jsonb!
    ) {
      insertUser(
        object: {
          firebaseId: $firebaseId
          email: $email
          emailVerified: $emailVerified
          name: $name
          firebaseUser: $firebaseUser
        }
        on_conflict: {
          constraint: users_firebase_id_key
          update_columns: [name, firebaseUser, emailVerified]
        }
      ) {
        id
      }
    }
  `

  const {insertUser: user} = await client.request(query, {
    firebaseId,
    email,
    emailVerified,
    name,
    firebaseUser,
  })

  // Check if user meets role criteria:
  // Your custom logic here: to decide what roles and other `x-hasura-*` should the user get
  const customClaims = {
    'https://hasura.io/jwt/claims': {
      'x-hasura-default-role': 'user',
      'x-hasura-allowed-roles': ['user'],
      'x-hasura-user-id': user.id,
    },
  }

  // Set custom user claims on this newly created user.
  return admin
    .auth()
    .setCustomUserClaims(firebaseUser.uid, customClaims)
    .then(() => {
      // Update real-time database to notify client to force refresh.
      const metadataRef = admin.database().ref(`metadata/${firebaseUser.uid}`)
      // Set the refresh time to the current UTC timestamp.
      // This will be captured on the client to force a token refresh.
      return metadataRef.set({refreshTime: new Date().getTime()})
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error)
    })
})
