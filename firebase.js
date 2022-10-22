// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfUKVLsZ4XBU8X0P-9HHAGRWaeBauFkm0",
  authDomain: "smallstep-5b691.firebaseapp.com",
  projectId: "smallstep-5b691",
  storageBucket: "smallstep-5b691.appspot.com",
  messagingSenderId: "276942731099",
  appId: "1:276942731099:web:bd6d604234900ee2ed0c7e",
  measurementId: "G-6HHPPQNEC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
