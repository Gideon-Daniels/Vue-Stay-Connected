import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAd6gnmsUCvglfbMhnv-4_za7oVJrBnAGg",
    authDomain: "stay-connected-13397.firebaseapp.com",
    projectId: "stay-connected-13397",
    storageBucket: "stay-connected-13397.appspot.com",
    messagingSenderId: "561048064291",
    appId: "1:561048064291:web:129897cbc3af061d4cfc96"
  };


// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const proejectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, proejectAuth, timestamp}