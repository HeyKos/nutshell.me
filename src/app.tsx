import React from "react";
import "fontsource-roboto";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthenticationProvider } from "authentication-provider";
import CssBaseline from "@material-ui/core/CssBaseline";
import ApplicationLayout from "templates/application-layout";
import HomePage from "pages/home/home-page";

const App: React.FC = () => {
    // -----------------------------------------------------------------------------------------
    // #region Render
    // -----------------------------------------------------------------------------------------

    return (
        <AuthenticationProvider>
            <CssBaseline />
            <Router>
                <ApplicationLayout>
                    <Switch>
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </ApplicationLayout>
            </Router>
        </AuthenticationProvider>
    );

    // #endregion Render
};

export default App;
