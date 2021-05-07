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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  // Firestore batch if one fails nothing is pushed to firebase
  const batch = firestore.batch();

  for (const [key] of Object.entries(objectsToAdd)) {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, objectsToAdd[key]);
  }

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
