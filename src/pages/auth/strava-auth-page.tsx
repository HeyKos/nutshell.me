import React from "react";
import Typography from "@material-ui/core/Typography";
import { useLocation } from "react-router-dom";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

type StravaAuth = {
    code: string;
    scope: string;
    state: string;
};

const useStravaAuth = (): StravaAuth => {
    const query = new URLSearchParams(useLocation().search);
    return {
        code: query.get("code"),
        state: query.get("state"),
        scope: query.get("scope"),
    } as StravaAuth;
};

const StravaAuthPage: React.FC = () => {
    const stravaAuth = useStravaAuth();
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
