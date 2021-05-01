import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import stravaConfig from "strava-config";

const ProfilePage: React.FC = () => {
    const onStravaClick = async () => {
        window.location.href = `http://www.strava.com/oauth/authorize?client_id=${stravaConfig.clientId}&response_type=code&redirect_uri=http://localhost:3000/auth/strava&approval_prompt=force&scope=read`;
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
