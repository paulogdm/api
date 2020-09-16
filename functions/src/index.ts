// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
import admin from 'firebase-admin'

admin.initializeApp()

export {ping} from './ping'
export {authSignup} from './auth-signup'
