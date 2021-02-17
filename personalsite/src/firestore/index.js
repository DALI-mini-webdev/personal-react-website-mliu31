import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBW_d9peSXlLj1UxlVNJOJ8aAcBtU4n4uI",
    authDomain: "dali-wisp.firebaseapp.com",
    projectId: "dali-wisp",
    storageBucket: "dali-wisp.appspot.com",
    messagingSenderId: "367591634716",
    appId: "1:367591634716:web:ecee29d0e23ee060356cd9",
    measurementId: "G-BZ158LTY18"
});


const db = firebase.firestore();


export default {
    firebase, db
}
