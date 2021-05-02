import { Result } from "models/result";
import axios from "axios";
import stravaConfig from "strava-config";
import { AuthTokenRequestData, AuthTokenResponse } from "types/strava-types";

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------}

const getAuthToken = async (
    authCode: string
): Promise<Result<AuthTokenResponse>> => {
    try {
        const response = await axios.post(
            "https://www.strava.com/oauth/token",
            _getAuthTokenRequestData(authCode)
        );

        if (response.status !== 200) {
            throw Error(
                `Authentication token request was not successful. Status Code: ${response.status}. Status: ${response.statusText}`
            );
        }

        if (!response.data) {
            throw Error("No authentication token data recieved.");
        }

        return Result.ok<AuthTokenResponse>(response.data);
    } catch (error) {
        return Result.fail<AuthTokenResponse>(error.message);
    }
};

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Private Functions
// -----------------------------------------------------------------------------------------

const _getAuthTokenRequestData = (authCode: string): AuthTokenRequestData => {
    return {
        client_id: (stravaConfig?.clientId as string) ?? "",
        client_secret: (stravaConfig?.clientSecret as string) ?? "",
        code: authCode,
        grant_type: "authorization_code",
    };
};

// #endregion Private Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

const StravaService = {
    getAuthToken,
};

export default StravaService;

// #endregion Exports
