import React from "react";
import "fontsource-roboto";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "routes";
import RouteWrapper from "route-wrapper";
import { AuthenticationProvider } from "authentication-provider";

const App: React.FC = () => {
    // -----------------------------------------------------------------------------------------
    // #region Render
    // -----------------------------------------------------------------------------------------

    return (
        <AuthenticationProvider>
            <Router>
                <Switch>
                    {routes.map((route, i) => (
                        <RouteWrapper route={route} key={i} {...route} />
                    ))}
                </Switch>
            </Router>
        </AuthenticationProvider>
    );

    // #endregion Render
};

export default App;
