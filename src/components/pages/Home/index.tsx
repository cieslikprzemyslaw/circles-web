import React from "react";
import { useLittera } from "react-littera";
import useStyles from "./styles"
import translations from "./trans"
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStore } from "store/hooks";


/**
 * Home page component.
 */
const Home = () => {
    const history = useHistory();
    const [translated] = useLittera(translations);
    const classes = useStyles();

    const currentAccount = useStore(state => state.currentAccount);

    return <div className={classes.root}>
        {translated.title}

        {currentAccount && <Button onClick={() => history.push("/profile")}>{currentAccount.label} Profile</Button>}
    </div>
}

export default Home;