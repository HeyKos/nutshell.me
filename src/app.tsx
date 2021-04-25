import React from "react";
import "fontsource-roboto";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthenticationProvider } from "authentication-provider";
import CssBaseline from "@material-ui/core/CssBaseline";
import ApplicationLayout from "templates/application-layout";
import Routes from "./routes";

const App: React.FC = () => {
    // -----------------------------------------------------------------------------------------
    // #region Render
    // -----------------------------------------------------------------------------------------

    return (
        <AuthenticationProvider>
            <CssBaseline />
            <Router>
                <ApplicationLayout>
                    <Routes />
                </ApplicationLayout>
            </Router>
        </AuthenticationProvider>
    );

    // #endregion Render
};

export default App;
