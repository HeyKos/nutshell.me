import React from "react";
import "fontsource-roboto";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/home/home-page";

const Routes: React.FC = () => {
    // -----------------------------------------------------------------------------------------
    // #region Render
    // -----------------------------------------------------------------------------------------

    return (
        <Switch>
            <Route path="/">
                <HomePage />
            </Route>
        </Switch>
    );

    // #endregion Render
};

export default Routes;
