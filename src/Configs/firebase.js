import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC-nUMezji8WQ9bwwMkneXV_hwMrGBdLug",
  authDomain: "xproject-976ff.firebaseapp.com",
  projectId: "xproject-976ff",
  storageBucket: "xproject-976ff.appspot.com",
  messagingSenderId: "741021699617",
  appId: "1:741021699617:web:3d207c7cc70d15c5039d60",
  measurementId: "G-ET8ZL0JRNK"
  });

  const storage = firebaseApp.storage();
  const auth = firebaseApp.auth();
  const db = firebaseApp.firestore();
  var provider = new firebase.auth.GoogleAuthProvider();
  // firebase.analytics();

  export {db, storage, auth, provider}; 
