import "firebase/firestore";
import { Result } from "models/result";
import UserConnector from "models/user-connector";
import UserConnectorConverter from "utilities/converters/user-connector-converter";
import FirestoreUtils from "utilities/firestore-utils";

// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------

const COLLECTION_NAME = "userConnectors";

// #endregion Constants

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------}

const create = async (
    userConnector: UserConnector
): Promise<Result<UserConnector>> => {
    try {
        const db = FirestoreUtils.getDb();
        const docReference = await db
            .collection(COLLECTION_NAME)
            .withConverter(UserConnectorConverter)
            .add(userConnector);

        if (docReference == null) {
            throw Error("No user connector was returned from firebase.");
        }

        const newConnector = await docReference.get();
        return Result.ok<UserConnector>(newConnector.data());
    } catch (error) {
        return Result.fail<UserConnector>(error.message);
    }
};

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

const UserConnectorsService = {
    create,
};

export default UserConnectorsService;

// #endregion Exports
