import React from "react";
import firebase from "firebase-init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
    AppBar,
    Avatar,
    Button,
    ButtonBase,
    Grid,
    Toolbar,
    Typography,
} from "@mui/material";

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

    const auth = getAuth(firebase);
    const onSignInClick = () => authenticateWithGoogle();

    const onSignOutClick = () => auth.signOut();

    const authenticateWithGoogle = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
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
                    justifyContent="space-between"
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
                                color="primary"
                                onClick={onSignInClick}>
                                Sign In
                            </Button>
                        )}
                        {isAuthenticated && (
                            <Button
                                variant="contained"
                                color="primary"
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
