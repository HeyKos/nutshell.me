import React from "react";
import Typography from "@material-ui/core/Typography";
import { useLocation } from "react-router-dom";

const useQuery = () => new URLSearchParams(useLocation().search);

const StravaAuthPage: React.FC = () => {
    const query = useQuery();
    // ---------------------------------------------------x--------------------------------------
    // #region Render
    // -----------------------------------------------------------------------------------------

    return (
        <Typography variant="h1">Strava Auth: {query.get("code")}</Typography>
    );

    // #endregion Render
};

export default StravaAuthPage;
