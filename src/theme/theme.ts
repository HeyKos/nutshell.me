import createTheme from "@mui/material/styles/createTheme";
import { colors } from "theme/colors";
import sizes from "theme/sizes";

const theme = createTheme({
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
            fontSize: sizes.largest,
            fontWeight: "normal",
        },
        h2: {
            fontSize: sizes.larger,
            fontWeight: "bold",
        },
        h3: {
            fontSize: sizes.large,
        },
        h4: {
            fontSize: sizes.large,
            fontWeight: "lighter",
        },
        h5: {
            fontSize: sizes.medium,
        },
        h6: {
            fontSize: sizes.medium,
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
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundColor: colors.white,
                    "&:hover": {
                        backgroundColor: colors.secondary,
                    },
                },
            },
        },
    },
});

export default theme;
