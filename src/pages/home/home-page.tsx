import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import firebase from "firebase-init";
import "firebase/auth";

const HomePage: React.FC = () => {
    // -----------------------------------------------------------------------------------------
    // #region Functions
    // -----------------------------------------------------------------------------------------

    const onLoginClick = () => {
        authenticateWithGoogle();
    };

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

    // ---------------------------------------------------x--------------------------------------
    // #region Render
    // -----------------------------------------------------------------------------------------

    return <Typography variant="h1">Nutshell</Typography>;

    // #endregion Render
};

export default HomePage;
