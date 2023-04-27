import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  const firebaseConfig = {
    apiKey: "AIzaSyAdg7P0b91K7l10y5WJE-voAFQey3qUCFQ",
    authDomain: "asdffds-c3a0b.firebaseapp.com",
    projectId: "asdffds-c3a0b",
    storageBucket: "asdffds-c3a0b.appspot.com",
    messagingSenderId: "952906668507",
    appId: "1:952906668507:web:8850781ace8d8157df2ffe"
  };
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
