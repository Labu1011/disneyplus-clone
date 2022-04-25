import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider } from 'firebase/auth'

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
const firebaseApp = initializeApp(firebaseConfig)
// const db = firebaseApp.firestore()
const provider = new GoogleAuthProvider()
// const storage = firebase.storage()

export { provider }
// export default db
