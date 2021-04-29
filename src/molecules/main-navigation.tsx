import React from "react";
import Avatar from "@material-ui/core/Avatar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import firebase from "firebase-init";
import "firebase/auth";

export interface MainNavigationProps {
    isAuthenticated: boolean;
}

export const MainNavigation: React.FC<MainNavigationProps> = (
    props: MainNavigationProps
) => {
    const { isAuthenticated } = props;
    // -----------------------------------------------------------------------------------------
    // #region Functions
    // -----------------------------------------------------------------------------------------

    const onSignInClick = () => authenticateWithGoogle();

    const onSignOutClick = () => firebase.auth().signOut();

    const authenticateWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const credential = result.credential;
                const user = result.user;
                console.log("credential", credential?.toJSON());
                console.log("user", user?.toJSON());
            })
            .catch((error) => {
                console.log("Login error", error);
            });
    };

    // #endregion Functions

    // -----------------------------------------------------------------------------------------
    // #region Render
    // -----------------------------------------------------------------------------------------

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center">
                    <Grid item>
                        <Grid container alignItems="center">
                            <ButtonBase>
                                <Avatar
                                    alt="nutshell.me logo"
                                    src="/src/assets/images/logo.svg"
                                />
                            </ButtonBase>
                            <Typography variant="h5">nutshell.me</Typography>
                        </Grid>
                    </Grid>

                    <Grid item>
                        {!isAuthenticated && (
                            <Button
                                variant="contained"
                                color="default"
                                onClick={onSignInClick}>
                                Sign In
                            </Button>
                        )}
                        {isAuthenticated && (
                            <Button
                                variant="contained"
                                color="default"
                                onClick={onSignOutClick}>
                                Sign Out
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );

    // #endregion Render
};

export default MainNavigation;
