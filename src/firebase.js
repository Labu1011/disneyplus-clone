import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider } from 'firebase/auth'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'disney-clone-b9b42.firebaseapp.com',
  projectId: 'disney-clone-b9b42',
  storageBucket: 'disney-clone-b9b42.appspot.com',
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
}

// Initialize firebase
const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore()
const provider = new GoogleAuthProvider()
// const storage = firebase.storage()

export { provider }
export default db
