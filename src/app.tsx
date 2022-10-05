import React from "react";
import "fontsource-roboto";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthenticationProvider } from "authentication-provider";
import ApplicationLayout from "templates/application-layout";
import Routes from "routes";
import theme from "theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const App: React.FC = () => {
    // -----------------------------------------------------------------------------------------
    // #region Render
    // -----------------------------------------------------------------------------------------

    return (
        <AuthenticationProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <ApplicationLayout>
                        <Routes />
                    </ApplicationLayout>
                </Router>
            </ThemeProvider>
        </AuthenticationProvider>
    );

    // #endregion Render
};

export default App;
