import firebase from 'firebase'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyA2e0WhTqwy9bQZd3nHSvH84Wo86W0a6XI',
  authDomain: 'citas-26b51.firebaseapp.com',
  projectId: 'citas-26b51',
  storageBucket: 'citas-26b51.appspot.com',
  messagingSenderId: '543030006044',
  appId: '1:543030006044:web:03fdba95e95e499a992ad9'
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

export default firebase
