import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzc3N-ovjLmGcmIS3MmBGfda6LzZpRwNY",
  authDomain: "clone-app-8f4de.firebaseapp.com",
  projectId: "clone-app-8f4de",
  storageBucket: "clone-app-8f4de.appspot.com",
  messagingSenderId: "183177002556",
  appId: "1:183177002556:web:3c73ef092e18bb17340d39",
  measurementId: "G-X8RVJDX24R"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };