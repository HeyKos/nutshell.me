import React, { useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { AuthenticationContext } from "authentication-provider";

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
    const { isAuthenticated } = useContext(AuthenticationContext);

    return (
        <Route>
            {isAuthenticated && props.children}
            {!isAuthenticated && (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: props.location },
                    }}
                />
            )}
        </Route>
    );
};

export default PrivateRoute;
