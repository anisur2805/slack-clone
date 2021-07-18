import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDVVyB7-7oxFzZbB21OBTmZnpq7oAB5WrQ",
    authDomain: "slack-clone-bad04.firebaseapp.com",
    projectId: "slack-clone-bad04",
    storageBucket: "slack-clone-bad04.appspot.com",
    messagingSenderId: "371992911846",
    appId: "1:371992911846:web:5856e3cdfc7b008dff8027",
    measurementId: "G-FDZZ42VFB0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider}