// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {Firestore, getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCE8R9pxsSA6DsNyuQbFowoaYQrvQ08B0",
  authDomain: "react-journal-app-b5a9e.firebaseapp.com",
  projectId: "react-journal-app-b5a9e",
  storageBucket: "react-journal-app-b5a9e.appspot.com",
  messagingSenderId: "143802439334",
  appId: "1:143802439334:web:b6b0f0146e40ceb8fd0667",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);