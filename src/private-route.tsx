import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthenticationContext } from "./authentication-provider";

export interface PrivateRouteProps extends Route {
    component: React.FC;
}

const PrivateRoute: React.FC<PrivateRouteProps> = (
    props: PrivateRouteProps
) => {
    const { isAuthenticated } = useContext(AuthenticationContext);
    // TODO: Update to redirect to sign in page once created.
    const routeComponent = isAuthenticated ? props.component : undefined;

    return <Route {...props} component={routeComponent} />;
};

export default PrivateRoute;
