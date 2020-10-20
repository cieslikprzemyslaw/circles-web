import React from "react";
import { useLittera } from "react-littera";
import useStyles from "./styles";
import translations from "./trans";
import { Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStore, useDispatch } from "store/hooks";
import { signOut } from "api/auth";
import { useStorageSetter } from "storage/hooks";
import { setCurrentAccount } from "store/actions";

/**
 * Home page component.
 */
const Highlights = () => {
  const history = useHistory();
  const [translated] = useLittera(translations);
  const classes = useStyles();
  const storageSetter = useStorageSetter();
  const storeDispatch = useDispatch();

  const currentAccount = useStore(state => state.currentAccount);

  const handleSignOut = async () => {
    await signOut();
    storageSetter("accountIdToken");
    storeDispatch(setCurrentAccount(null));
    window.location.reload(true);
  };

  return (
    <div className={classes.root}>
      <section className={classes.welcome}>
          <Typography variant='h2'>{translated.greeting}</Typography>
          <Typography variant='h2'>{currentAccount?.name}</Typography>
      </section>
      <section className={classes.avatarContainer}>
        {currentAccount?.avatar_url ? <img className={classes.avatar} src={currentAccount?.avatar_url} alt="account avatar"/>:<Typography variant="h3">{translated.loadImage}</Typography>}
      </section>
      <section>
        {currentAccount && (
          <Button onClick={() => history.push("/profile")}>
            {currentAccount.label} Profile
          </Button>
        )}
        {currentAccount && (
          <Button variant='contained' onClick={handleSignOut}>
            Sign out
          </Button>
        )}
      </section>
      <section>
        
      </section>
    </div>
  );
};

export default Highlights;
