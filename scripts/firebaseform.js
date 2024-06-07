// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCztv4fHQ0zdq_ghtzhnsnk9FsLiGouGOU",
  authDomain: "english-11-status-quo.firebaseapp.com",
  projectId: "english-11-status-quo",
  storageBucket: "english-11-status-quo.appspot.com",
  messagingSenderId: "377032900213",
  appId: "1:377032900213:web:ce5e9c5c4eb6e3374e023c",
  measurementId: "G-XNNQ61NGHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore();
const analytics = getAnalytics(app);


//READ WRITE functions
function writeUserData(grade, name) {
  firebase.database().set({
    grade: grade,
    name: name
  });
}