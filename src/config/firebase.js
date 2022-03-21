// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBy1rmTwdjq0eUYxp7OWbcARryEms1oC1E",
  authDomain: "vuechat-253d1.firebaseapp.com",
  projectId: "vuechat-253d1",
  storageBucket: "vuechat-253d1.appspot.com",
  messagingSenderId: "224694267988",
  appId: "1:224694267988:web:250681515373ac8ecbfdc1",
  measurementId: "G-MXHF3D0GGV",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
