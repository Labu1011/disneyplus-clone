import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider } from 'firebase/auth'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDSMHeWGAgIOVWbmh9YC8i5P3QpWbdVRdw',
  authDomain: 'disney-clone-b9b42.firebaseapp.com',
  projectId: 'disney-clone-b9b42',
  storageBucket: 'disney-clone-b9b42.appspot.com',
  messagingSenderId: '226771558402',
  appId: '1:226771558402:web:d9561a0260711e5fb7c71b',
  measurementId: 'G-ZE7KLP9M6T',
}

// Initialize firebase
const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore()
const provider = new GoogleAuthProvider()
// const storage = firebase.storage()

export { provider }
export default db
