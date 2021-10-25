import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import firebaseConfig from "firebase-config";
import { initializeFirestore } from "firebase/firestore";

let firebase: FirebaseApp;

if (!getApps().length) {
    firebase = initializeApp(firebaseConfig);
    initializeFirestore(firebase, { experimentalForceLongPolling: true });
    // firebase.firestore().settings({ experimentalForceLongPolling: true });
} else {
    firebase = getApps()[0];
}

export default firebase;
