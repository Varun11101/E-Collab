import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBAYqqjHID86wesZE53SYNEFP2cL9HyyiU",
  authDomain: "collab-8b48e.firebaseapp.com",
  projectId: "collab-8b48e",
  storageBucket: "collab-8b48e.appspot.com",
  messagingSenderId: "604115805025",
  appId: "1:604115805025:web:065e903390701f4dfddb20",
};

//init firebase

firebase.initializeApp(firebaseConfig)

//init services

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//timestamp

const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, projectStorage, timestamp}

