import firebase from "firebase-init";
import "firebase/firestore";

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

const getDb = (): firebase.firestore.Firestore => {
    if (firebase == null) {
        throw new Error("Firebase is not initialized.");
    }

    return firebase.firestore();
};

// TODO: Move this to a different util module.
const timestampFromDate = (date: Date): firebase.firestore.Timestamp =>
    firebase.firestore.Timestamp.fromDate(date);

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

const FirestoreUtils = {
    getDb,
    timestampFromDate,
};

export default FirestoreUtils;

// #endregion Exports
