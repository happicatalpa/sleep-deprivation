// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "firebase/firestore";
//import { getFireStore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Handle form submission
document.getElementById('userForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the default form submission

  // Get form values
  var grade = document.getElementById('grade').value;
  var name = document.getElementById('name').value;

  console.log(grade, name);

  // Save to Firestore
  db.collection("Students").add({
    name: name,
    grade: grade
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
});

/*
//READ WRITE functions
async function writeUserData(grade, name) {
  const docRef = await addDoc(collection(db, "Students"), {
    grade: grade,
    name: name
  });
}
*/