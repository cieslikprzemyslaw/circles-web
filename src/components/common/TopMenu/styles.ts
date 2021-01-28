// Here we define styles for the component.

import { createStyles, Theme } from "@material-ui/core";

// eslint-disable-next-line import/no-anonymous-default-export
export default ((theme: Theme) => createStyles({
    root: {
        position: "relative",
        display: "flex",
        height: "72px",
        width: "100%",
        margin: "0 auto",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
    },
    menuBar: {
        marginRight: "3vw"
    },

}));