import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

firebase.initializeApp({
    apiKey: "AIzaSyDLVN-iAKxCb1tcqha0tlbSo6_oOFlGlWk",
    authDomain: "gatecourse-8907d.firebaseapp.com",
    projectId: "gatecourse-8907d",
    storageBucket: "gatecourse-8907d.appspot.com",
    messagingSenderId: "654777480413",
    appId: "1:654777480413:web:0a754aee1ead32a4d4d734",
    measurementId: "G-5J11EYKMPF"

});

const auth = firebase.auth();
const firestore = firebase.firestore();


export { auth, firestore, firebase };