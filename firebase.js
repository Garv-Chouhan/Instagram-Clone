// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtTMYYPxsJiEY5LjIa7_oeX95iJTKWxfk",
  authDomain: "instagram-clone-1dece.firebaseapp.com",
  projectId: "instagram-clone-1dece",
  storageBucket: "instagram-clone-1dece.appspot.com",
  messagingSenderId: "197329922976",
  appId: "1:197329922976:web:3945b4fc08a2c4f2a7d2c5",
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();
export { firebase, db };
