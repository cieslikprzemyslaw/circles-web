import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#449ee2"
        },
        secondary: {
            main: "#99d8ff"
        },
        background: {
            default: "#FAFAFA"
        }
    },
    spacing: 4,
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    WebkitFontSmoothing: 'auto',
                },
            },
        },
    },
});

export default theme;