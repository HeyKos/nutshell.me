import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import colors from "constants/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: colors.primary,
        },
        secondary: {
            main: colors.secondary,
        },
        text: {
            primary: colors.black,
            secondary: colors.tertiary,
        },
        background: {
            default: colors.white,
        },
    },
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        h1: {
            color: colors.tertiary,
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

export default theme;
