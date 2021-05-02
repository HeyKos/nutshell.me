import { Result } from "models/result";
import axios from "axios";
import stravaConfig from "strava-config";

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------}

const getAuthToken = async (authCode: string): Promise<Result<string>> => {
    try {
        const response = await axios.post(
            "https://www.strava.com/oauth/token",
            {
                client_id: stravaConfig.clientId,
                client_secret: stravaConfig.clientSecret,
                code: authCode,
                grant_type: "authorization_code",
            }
        );

        if (response.status !== 200) {
            throw Error(
                `Authentication token request was not successful. Status Code: ${response.status}. Status: ${response.statusText}`
            );
        }

        if (!response.data) {
            throw Error("No authentication token data recieved.");
        }

        console.log("getAuthToken Success", response.data);
        return Result.ok<string>("we good");
    } catch (error) {
        return Result.fail<string>(error.message);
    }
};

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

const StravaService = {
    getAuthToken,
};

export default StravaService;

// #endregion Exports
