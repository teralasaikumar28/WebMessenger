import firebase from 'firebase'

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyA3a0w-HwqyYEZ_oyEkaoKabsS1D8vBV98",
  authDomain: "webmessenger-569c5.firebaseapp.com",
  projectId: "webmessenger-569c5",
  storageBucket: "webmessenger-569c5.appspot.com",
  messagingSenderId: "1059289565456",
  appId: "1:1059289565456:web:e33e650c47bb5e8869bd95",
  measurementId: "G-GX60X8QSTD"
})

const db=firebaseApp.firestore()

const auth=firebase.auth()

export {db,auth}