import "firebase/firestore";
import firebase from "firebase-init";
import UserConnector from "models/user-connector";

// -----------------------------------------------------------------------------------------
// #region Types
// -----------------------------------------------------------------------------------------

type DocumentData = firebase.firestore.DocumentData;
type QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
type SnapshotOptions = firebase.firestore.SnapshotOptions;
type FirestoreDataConverter = firebase.firestore.FirestoreDataConverter<UserConnector>;

// #endregion Types

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

function fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
): UserConnector {
    const data = snapshot.data(options);
    return new UserConnector(snapshot.id, data.userId, data.type, data.data);
}

function toFirestore(userConnector: UserConnector): DocumentData {
    return {
        data: userConnector.data,
        id: userConnector.id,
        type: userConnector.type,
        userId: userConnector.userId,
    };
}

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

const UserConnectorConverter: FirestoreDataConverter = {
    fromFirestore,
    toFirestore,
};

export default UserConnectorConverter;

// #endregion Exports
