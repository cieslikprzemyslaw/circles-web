import React from "react";
import { useLittera } from "react-littera";
import useStyles from "./styles"
import translations from "./trans"
import { Typography } from "@material-ui/core";
import { useStore } from "store/hooks";


/**
 * Welcome page component.
 */
const Welcome = () => {
    const [translated] = useLittera(translations);
    const classes = useStyles();

    const currentAccount = useStore(state => state.currentAccount);

    return <div className={classes.root}>
        <Typography variant="h2">{translated.title} {currentAccount?.label}</Typography>

        <Typography paragraph>Here you need to provide us with some data about you. Name, Surname etc.</Typography>
    </div>
}

export default Welcome;