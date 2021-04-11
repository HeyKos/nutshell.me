import React from "react";
import { Route } from "./types";
import { Route as ReactRoute } from "react-router-dom";

export interface RouteWrapperProps {
    route: Route;
}

const RouteWrapper: React.FC<RouteWrapperProps> = (
    props: RouteWrapperProps
) => {
    // ---------------------------------------------------x--------------------------------------
    // #region Constants
    // -----------------------------------------------------------------------------------------

    const { route } = props;

    // #endregion Constants

    // ---------------------------------------------------x--------------------------------------
    // #region Render
    // -----------------------------------------------------------------------------------------

    return (
        <ReactRoute
            path={route.path}
            render={(props) => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );

    // #endregion Render
};

export default RouteWrapper;
