import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCJU5y4FrhvTdBsGpqIOOZfjC8NllzuEEc",
    authDomain: "foro-de-quejas-96df2.firebaseapp.com",
    projectId: "foro-de-quejas-96df2",
    storageBucket: "foro-de-quejas-96df2.appspot.com",
    messagingSenderId: "103285644376",
    appId: "1:103285644376:web:fb6b43814cffa13136fe2d",
    measurementId: "G-C5W1QXPW43"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
