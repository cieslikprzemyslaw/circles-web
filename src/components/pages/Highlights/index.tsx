import React from "react";
import { useLittera } from "react-littera";
import useStyles from "./styles";
import translations from "./trans";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStore } from "store/hooks";

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
      <section className={classes.welcome}>
          <Typography variant='h2'>{translated.greeting}</Typography>
          <Typography variant='h2'>{currentAccount?.name}</Typography>
      </section>
      <section className={classes.avatarContainer}>
          <img className={classes.avatar} src={currentAccount?.avatar_url ? currentAccount?.avatar_url : `https://eu.ui-avatars.com/api/?name=${currentAccount?.name}`} alt="account avatar" onClick={() => history.push("/profile")}/> 
      </section>
      <section>
        
      </section>
    </div>
  );
};

export default Highlights;
