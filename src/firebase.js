// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQYx7v6djB8vNiWUjdXgJcmuJdEbTOCcY",
  authDomain: "tinder-clone-fef97.firebaseapp.com",
  projectId: "tinder-clone-fef97",
  storageBucket: "tinder-clone-fef97.appspot.com",
  messagingSenderId: "525220565295",
  appId: "1:525220565295:web:05e3f9cf8c92a88b4a11da",
  measurementId: "G-7W5KJ54EZE"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;