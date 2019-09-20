import firebase from 'firebase'
import 'firebase/firestore'

// Shashank web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBdycS-ev8PsirXNdpCs2ufID8KGX5ylgg',
  authDomain: 're-vents-241317.firebaseapp.com',
  databaseURL: 'https://re-vents-241317.firebaseio.com',
  projectId: 're-vents-241317',
  storageBucket: 're-vents-241317.appspot.com',
  messagingSenderId: '602301689743',
  appId: '1:602301689743:web:0ce047f8886ca7cb'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
