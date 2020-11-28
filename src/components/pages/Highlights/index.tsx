import React from "react";
import { useLittera } from "react-littera";
import useStyles from "./styles";
import translations from "./trans";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStore } from "store/hooks";
import AccountSuggestions from "components/common/AccountSugestions";

/**
 * Home page component.
 */
const Highlights = () => {
  const history = useHistory();
  const [translated] = useLittera(translations);
  const classes = useStyles();

  const currentAccount = useStore(state => state.currentAccount);

  return (
    <div className={classes.root}>
      <section className={classes.welcomeWraper}>
        <section className={classes.welcome}>
            <Typography variant='h3'>{translated.greeting}</Typography>
            <Typography variant='h3'>{currentAccount?.name}</Typography>
            <Typography variant='h3'>Here are some suggestions for you</Typography>
        </section>
        <section className={classes.avatarContainer}>
            <img className={classes.avatar} src={currentAccount?.avatar_url ? currentAccount?.avatar_url : `https://eu.ui-avatars.com/api/?name=${currentAccount?.name}`} alt="account avatar" onClick={() => history.push("/profile")}/> 
        </section>
      </section>
      <section style={{width: "100%"}}>
        <AccountSuggestions/>
      </section>
    </div>
  );
};

export default Highlights;
