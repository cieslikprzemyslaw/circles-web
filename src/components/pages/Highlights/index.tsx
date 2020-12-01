import React from "react";
import { useLittera } from "react-littera";
import useStyles from "./styles";
import translations from "./trans";
import { Typography } from "@material-ui/core";
import { useStore } from "store/hooks";
import AccountSuggestions from "components/common/AccountSugestions";
import AccountFavContacts from "components/common/AccountFavContacts";

/**
 * Home page component.
 */
const Highlights = () => {
  const [translated] = useLittera(translations);
  const classes = useStyles();

  const currentAccount = useStore(state => state.currentAccount);

  return (
    <div className={classes.root}>
      <div>
        <section className={classes.welcomeWraper}>
          <section className={classes.welcome}>
            <Typography className={classes.greetings} variant='h2'>{translated.greeting}, {currentAccount?.name}!</Typography>
            <Typography className={classes.suggestionsInfo} variant='h5'>Here are some suggestions for you</Typography>
          </section>
        </section>
        <AccountFavContacts />
      </div>
      <AccountSuggestions />
    </div>
  );
};

export default Highlights;
