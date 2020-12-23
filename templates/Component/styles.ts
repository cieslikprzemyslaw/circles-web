// Here we define styles for the component.

import { createStyles, Theme } from "@material-ui/core";

// eslint-disable-next-line import/no-anonymous-default-export
export default ((theme: Theme) => createStyles({
    root: {
        // Container styles...
    },
    h4: {
        // Head text styles...
        color: theme.palette.primary.main
    }
}));