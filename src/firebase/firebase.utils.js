import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCwky5EDloLJHcocF3IbBYNKm3XyUxGSwI",
  authDomain: "crwn-db-a3d7f.firebaseapp.com",
  databaseURL: "https://crwn-db-a3d7f-default-rtdb.firebaseio.com",
  projectId: "crwn-db-a3d7f",
  storageBucket: "crwn-db-a3d7f.appspot.com",
  messagingSenderId: "857037702866",
  appId: "1:857037702866:web:a12cac8e340f24029b8f0b",
  measurementId: "G-HKVGNHQM5H",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
