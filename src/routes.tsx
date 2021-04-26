import React from "react";
import "fontsource-roboto";
import { Route, Switch } from "react-router-dom";
import HomePage from "pages/home/home-page";
import AdminPage from "pages/admin/admin-page";
import AuthenticatedRoute from "authenticated-route";

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
        </Switch>
    );

    // #endregion Render
};

export default Routes;
