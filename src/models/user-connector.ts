import { AuthTokenResponse } from "types/strava-types";

export interface UserConnectorInterface {
    data: AuthTokenResponse; // Note: We'll add more types as additional connectors are implemented.
    id: string;
    type: "strava"; // Note: We'll add more types as additional connectors are implemented.
    userId: string;
}

class UserConnector implements UserConnectorInterface {
    data: AuthTokenResponse;
    id: string;
    type: "strava";
    userId: string;

    constructor(
        id: string,
        userId: string,
        type: "strava",
        data: AuthTokenResponse
    ) {
        this.data = data;
        this.id = id;
        this.type = type;
        this.userId = userId;
    }
}

export default UserConnector;
