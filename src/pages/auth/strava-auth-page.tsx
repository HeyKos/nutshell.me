import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import useQuery from "hooks/use-query";
import StravaAuth from "models/strava-auth";
import StravaService from "services/strava-service";
import UserConnectorsService from "services/user-connectors-service";
import { AuthTokenResponse } from "types/strava-types";
import UserConnector from "models/user-connector";

const StravaAuthPage: React.FC = () => {
    // -----------------------------------------------------------------------------------------
    // #region Constants
    // -----------------------------------------------------------------------------------------

    const stravaAuth = StravaAuth.fromUrlParams(useQuery());

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [tokenData, setTokenData] = useState(
        null as AuthTokenResponse | null
    );
    useEffect(() => {
        // Once we have the auth data, we should make a request for an auth token.
        StravaService.getAuthToken(stravaAuth.code).then((result) => {
            // TODO: Add proper error handling.
            if (result.isFailure) {
                return;
            }
            const authTokenData = result.getValue();
            if (authTokenData == null) {
                return;
            }
            setTokenData(authTokenData);
        });
    }, []);
    useEffect(() => {
        if (tokenData == null) {
            return;
        }
        const connector = new UserConnector(
            "",
            "ReplaceThisWithAuthenicatedUserId",
            "strava",
            tokenData
        );
        // Once we have the token data, we can persist it in firebase.
        UserConnectorsService.create(connector).then((response) => {
            console.log("Created Strava User Connector", response);
        });
    }, [tokenData]);

    // Finally, once that's all done we can direct the user back to the profile page.

    // #endregion Constants

    // ---------------------------------------------------x--------------------------------------
    // #region Render
    // -----------------------------------------------------------------------------------------

    return (
        <div>
            <Typography variant="h1">Strava Auth</Typography>
            <TableContainer component={Paper}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Code</TableCell>
                            <TableCell>Scope</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>AuthData</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>{stravaAuth.code}</TableCell>
                            <TableCell>{stravaAuth.scope}</TableCell>
                            <TableCell>{stravaAuth.state}</TableCell>
                            <TableCell>{JSON.stringify(tokenData)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );

    // #endregion Render
};

export default StravaAuthPage;
