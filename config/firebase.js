import * as firebase from "firebase";

const settings = {};

const config = {
  apiKey: "AIzaSyDXeRXRSphmo6AjN5jAc9jjEaTFoMtsUxY",
  authDomain: "sorabel-test.firebaseapp.com",
  databaseURL: "https://sorabel-test.firebaseio.com",
  projectId: "sorabel-test",
  storageBucket: "sorabel-test.appspot.com",
  messagingSenderId: "197194066812",
  appId: "1:197194066812:web:ff2b6df90bc88928"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

firebase.firestore().settings(settings);

export default firebase;
