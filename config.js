import  firebase from 'firebase'
require("@firebase/firestore")

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBp2dxlOL6xZQSEmWN_hdUgpAoci1br3QM",
    authDomain: "story-hub-c23b0.firebaseapp.com",
    projectId: "story-hub-c23b0",
    storageBucket: "story-hub-c23b0.appspot.com",
    messagingSenderId: "150790510452",
    appId: "1:150790510452:web:f0a99836a847ad8c9ffe21"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()