import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAMkFO64RvQiVHQ6l0u_tR-1egu7eb07cQ",
  authDomain: "ty-firebase-crud.firebaseapp.com",
  databaseURL: "https://ty-firebase-crud-default-rtdb.firebaseio.com",
  projectId: "ty-firebase-crud",
  storageBucket: "ty-firebase-crud.appspot.com",
  messagingSenderId: "74196157282",
  appId: "1:74196157282:web:a746c2338f3facad53223b",
};
// Initialize Firebase
var fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();
