import React, { useEffect, useState } from "react";
import firebase from "firebase-init";
import { AuthenticationContextProperties } from "types";

export const AuthenticationContext = React.createContext<
    Partial<AuthenticationContextProperties>
>({
    isAuthenticated: false,
    loadingAuthState: true,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthenticationProvider: React.FC = ({ children }: any) => {
    // -----------------------------------------------------------------------------------------
    // #region Hooks
    // -----------------------------------------------------------------------------------------

    const [user, setUser] = useState(null as firebase.User | null);
    const [loadingAuthState, setLoadingAuthState] = useState(true);
    const isAuthenticated: boolean = user != null;
    const providerContextProps: AuthenticationContextProperties = {
        isAuthenticated,
        loadingAuthState,
        setUser,
        user,
    };

    useEffect(
        () => firebase.auth().onAuthStateChanged(authStateChangedHandler),
        []
    );

    // #endregion Hooks

    // -----------------------------------------------------------------------------------------
    // #region Functions
    // -----------------------------------------------------------------------------------------

    const authStateChangedHandler = async (user: firebase.User | null) =>
        updateAuthenticationData(user, false);

    const updateAuthenticationData = (
        user: firebase.User | null,
        isLoading: boolean
    ) => {
        setUser(user);
        setLoadingAuthState(isLoading);
    };

    // #endregion Functions

    // -----------------------------------------------------------------------------------------
    // #region Render
    // -----------------------------------------------------------------------------------------

    if (loadingAuthState) {
        return null;
    }

    return (
        <AuthenticationContext.Provider value={providerContextProps}>
            {children}
        </AuthenticationContext.Provider>
    );

    // #endregion Render
};
