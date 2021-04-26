import React from "react";
import "fontsource-roboto";
import { Route, Switch } from "react-router-dom";
import HomePage from "pages/home/home-page";
import AdminPage from "pages/admin/admin-page";
import AuthenticatedRoute from "authenticated-route";
import ForbiddenPage from "pages/error/forbidden-page";

const Routes: React.FC = () => {
    // -----------------------------------------------------------------------------------------
    // #region Render
    // -----------------------------------------------------------------------------------------

    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <AuthenticatedRoute path="/admin">
                <AdminPage />
            </AuthenticatedRoute>
            <Route exact path="/forbidden">
                <ForbiddenPage />
            </Route>
        </Switch>
    );

    // #endregion Render
};

export default Routes;
