import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { AuthenticationContextProperties } from "types";

export const AuthenticationContext = React.createContext<
    Partial<AuthenticationContextProperties>
>({
    isAuthenticated: false,
    loadingAuthState: true,
});

export const AuthenticationProvider = ({
    children,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any): JSX.Element | null => {
    const [user, setUser] = useState<User | null>(null);
    const [loadingAuthState, setLoadingAuthState] = useState(true);
    const isAuthenticated: boolean = user != null;
    const providerContextProps: AuthenticationContextProperties = {
        isAuthenticated,
        loadingAuthState,
        setUser,
        user,
    };

    useEffect(() => {
        const auth = getAuth();
        return onAuthStateChanged(auth, authStateChangedHandler);
    }, []);

    const authStateChangedHandler = async (user: User | null) =>
        updateAuthenticationData(user, false);

    const updateAuthenticationData = (
        user: User | null,
        isLoading: boolean
    ) => {
        setUser(user);
        setLoadingAuthState(isLoading);
    };

    if (loadingAuthState) {
        return null;
    }

    return (
        <AuthenticationContext.Provider value={providerContextProps}>
            {children}
        </AuthenticationContext.Provider>
    );
};
