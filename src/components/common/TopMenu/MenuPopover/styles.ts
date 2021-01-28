// Here we define styles for the component.

import { createStyles, Theme } from "@material-ui/core";

// eslint-disable-next-line import/no-anonymous-default-export
export default ((theme: Theme) => createStyles({
    root: {
        // Container styles...
        marginTop: "10px"
    },
    h4: {
        // Head text styles...
        color: theme.palette.primary.main
    },
    avatar: {
        cursor: "pointer",
        marginLeft: "15px",
        position: "relative"
    },
    avatarBig: {
        cursor: "pointer",
        width: "82px",
        height: "82px",
        position: "relative",
        marginBottom: theme.spacing(4)
    },
    popoverPaper: {
        width: "288px",
        borderRadius: "10px"
    },
    header: {
        padding: `${theme.spacing(5)}px ${theme.spacing(4)}px`,
    },

}));