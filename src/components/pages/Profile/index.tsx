import React from "react";
import { useLittera } from "react-littera";
import useStyles from "./styles"
import translations from "./trans"
import { CircularProgress, Typography } from "@material-ui/core";
import { useStore } from "store/hooks";


/**
 * Profile page component.
 */
const Profile = () => {
    const [translated] = useLittera(translations);
    const classes = useStyles();

    const currentAccount = useStore(state => state.currentAccount)

    if(!currentAccount) return <CircularProgress />

    return <div className={classes.root}>
        {translated.title}

        <Typography>{currentAccount.label}</Typography>
    </div>
}

export default Profile;