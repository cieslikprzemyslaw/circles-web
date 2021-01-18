// Here we define styles for the component.

import { Theme } from "@material-ui/core";

// eslint-disable-next-line import/no-anonymous-default-export
export default ((theme: Theme) => ({
    root: {
        // Container styles...
    },
    h2: {
        // Head text styles...
        color: "#000"
    },
    drawer: {
        //width: "40vw"
    },
    paperDrawer: {
        position: "relative", padding: "10px 20px",
        width: "40vw"
    }
}));