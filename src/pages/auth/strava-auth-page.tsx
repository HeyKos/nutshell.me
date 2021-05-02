import React from "react";
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

const StravaAuthPage: React.FC = () => {
    // -----------------------------------------------------------------------------------------
    // #region Constants
    // -----------------------------------------------------------------------------------------

    const stravaAuth = StravaAuth.fromUrlParams(useQuery());

    // Once we have the auth data, we should make a request for an auth token.
    // Once we have the token data, we can persist it in firebase.
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>{stravaAuth.code}</TableCell>
                            <TableCell>{stravaAuth.scope}</TableCell>
                            <TableCell>{stravaAuth.state}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );

    // #endregion Render
};

export default StravaAuthPage;
