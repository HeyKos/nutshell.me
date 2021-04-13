import React from "react";
import Typography from "@material-ui/core/Typography";
import BusinessIcon from "@material-ui/icons/Business";
import Button from "@material-ui/core/Button";

const HomePage: React.FC = () => {
    // -----------------------------------------------------------------------------------------
    // #region Functions
    // -----------------------------------------------------------------------------------------

    const onLoginClick = () => {
        authenticateWithGoogle();
    };

    const authenticateWithGoogle = () => {
        // Login with google here.
    };

    // #endregion Functions

    // ---------------------------------------------------x--------------------------------------
    // #region Render
    // -----------------------------------------------------------------------------------------

    return (
        <>
            <Typography variant="h1">
                <BusinessIcon color="primary" />
                Nutshell
            </Typography>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onLoginClick}>
                    Login
                </Button>
            </div>
        </>
    );

    // #endregion Render
};

export default HomePage;
