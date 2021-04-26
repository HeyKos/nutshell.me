import React, { useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { AuthenticationContext } from "authentication-provider";

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
    const { isAuthenticated } = useContext(AuthenticationContext);

    return (
        <>
            {isAuthenticated && <Route>{props.children}</Route>}
            {!isAuthenticated && (
                <Route>
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: props.location },
                        }}
                    />
                </Route>
            )}
        </>
    );
};

export default PrivateRoute;
