import React from "react";
import { User } from "firebase/auth";

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
    user: User | null;
    isAuthenticated: boolean;
    loadingAuthState: boolean;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

// #endregion Authentication
