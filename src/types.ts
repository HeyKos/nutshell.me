import React from "react";
import firebase from "firebase";

export type Route = {
    path: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: React.FC<any>;
    routes?: Route[];
};

// -----------------------------------------------------------------------------------------
// #region Authentication
// -----------------------------------------------------------------------------------------

export type AuthenticationContextProperties = {
    user: firebase.User | null;
    isAuthenticated: boolean;
    loadingAuthState: boolean;
    setUser: React.Dispatch<React.SetStateAction<firebase.User | null>>;
};

// #endregion Authentication
