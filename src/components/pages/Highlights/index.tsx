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
            <Typography className={classes.greetings} variant='h3'>{translated.greeting}, {currentAccount?.name}!</Typography>
            <Typography className={classes.suggestionsInfo}variant='h3'>Here are some suggestions for you</Typography>
        </section>
      </section>
      <AccountSuggestions/>
    </div>
  );
};

export default Highlights;
