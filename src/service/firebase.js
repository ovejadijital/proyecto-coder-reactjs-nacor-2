// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh8FuR66jcHVTg6tifgRdPHAOfUnH6kpg",
  authDomain: "proyecto-final-nacor.firebaseapp.com",
  projectId: "proyecto-final-nacor",
  storageBucket: "proyecto-final-nacor.appspot.com",
  messagingSenderId: "589444270667",
  appId: "1:589444270667:web:bc4855d48a03f4f2b29bce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)