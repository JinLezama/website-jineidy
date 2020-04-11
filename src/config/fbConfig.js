import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyA1v8BOBuUT7yTyfs0RTiWZsYzbC1H9g5M",
    authDomain: "website-jineidy.firebaseapp.com",
    databaseURL: "https://website-jineidy.firebaseio.com",
    projectId: "website-jineidy",
    storageBucket: "website-jineidy.appspot.com",
    messagingSenderId: "634462884817",
    appId: "1:634462884817:web:ad3ceb0e1642ad0f2a86f0",
    measurementId: "G-KGDH77VFFY"
 };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore()

export default firebase