import firebase from 'firebase/app';
import 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyABP2ZeIi19YuSl1IAOjvKhMrzwvH8GUkQ",
    authDomain: "fb-prueba-d08ca.firebaseapp.com",
    databaseURL: "https://fb-prueba-d08ca.firebaseio.com",
    projectId: "fb-prueba-d08ca",
    storageBucket: "fb-prueba-d08ca.appspot.com",
    messagingSenderId: "132607872586",
    appId: "1:132607872586:web:86849a2b92dd374e45a0b3"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const database = fb.firestore();