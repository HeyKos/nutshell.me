import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const ProfilePage: React.FC = () => {
    const onStravaClick = () => {
        console.log("Strava clicked");
    };
    // ---------------------------------------------------x--------------------------------------
    // #region Render
    // -----------------------------------------------------------------------------------------

    return (
        <div>
            <Typography variant="h1">Profile</Typography>
            <Button variant="contained" color="default" onClick={onStravaClick}>
                Connect Strava
            </Button>
        </div>
    );

    // #endregion Render
};

export default ProfilePage;
