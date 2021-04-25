import React from "react";
import "fontsource-roboto";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "routes";
import RouteWrapper from "route-wrapper";

const App: React.FC = () => {
    // -----------------------------------------------------------------------------------------
    // #region Render
    // -----------------------------------------------------------------------------------------

    return (
        <Router>
            <Switch>
                {routes.map((route, i) => (
                    <RouteWrapper route={route} key={i} {...route} />
                ))}
            </Switch>
        </Router>
    );

    // #endregion Render
};

export default App;
