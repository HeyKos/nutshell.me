import React from "react";
import "fontsource-roboto";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthenticationProvider } from "authentication-provider";
import CssBaseline from "@material-ui/core/CssBaseline";
import ApplicationLayout from "templates/application-layout";
import Routes from "routes";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/styles";

const App: React.FC = () => {
    // -----------------------------------------------------------------------------------------
    // #region Theme
    // -----------------------------------------------------------------------------------------

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#40C6CC",
            },
            secondary: {
                main: "#D6C37E",
            },
            text: {
                primary: "#231F1D",
                secondary: "#8C5A40",
            },
            background: {
                default: "#F7F9F8",
            },
        },
        typography: {
            fontFamily: ["Montserrat", "sans-serif"].join(","),
            h1: {
                color: "#8C5A40",
                textTransform: "uppercase",
                fontSize: "4rem",
                fontWeight: "normal",
            },
            h2: {
                fontSize: "3rem",
                fontWeight: "bold",
            },
            h3: {
                fontSize: "2rem",
            },
            h4: {
                fontSize: "2rem",
                fontWeight: "lighter",
            },
            h5: {
                fontSize: "1rem",
            },
            h6: {
                fontSize: "1rem",
                fontWeight: "lighter",
            },
            button: {
                fontWeight: "normal",
            },
            body1: {
                fontWeight: "normal",
            },
            body2: {
                fontWeight: "lighter",
            },
        },
    });

    // #endregion Theme

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
