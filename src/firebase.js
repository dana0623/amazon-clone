import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDksOOM8-v6_hdsRMVEMDAn-pfeOh3Gxb8",
    authDomain: "clone-8ad6c.firebaseapp.com",
    projectId: "clone-8ad6c",
    storageBucket: "clone-8ad6c.appspot.com",
    messagingSenderId: "318268657072",
    appId: "1:318268657072:web:8ce9bd6124518f8e675a75",
    measurementId: "G-ZB51VFPLZL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };