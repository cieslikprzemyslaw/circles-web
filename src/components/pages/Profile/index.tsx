import React from "react";
import { useLittera } from "react-littera";
import useStyles from "./styles"
import translations from "./trans"
import { CircularProgress, Typography, Button } from "@material-ui/core";
import { useAccount } from "api/hooks";
import { signOut } from "api/auth";
import { setCurrentAccount } from "store/actions";
import { useDispatch } from "store/hooks";
import { useStorageSetter } from "storage/hooks";

/**
 * Profile page component.
 */
const Profile = () => {
    const [translated] = useLittera(translations);
    const classes = useStyles();
    const storageSetter = useStorageSetter();
    const storeDispatch = useDispatch();

    const currentAccount = useAccount(undefined, true);

    if(!currentAccount) return <CircularProgress />

    const handleSignOut = async () => {
        await signOut();
        storageSetter("accountIdToken");
        storeDispatch(setCurrentAccount(null));
        window.location.reload(true);
    };

    return (
      <div className={classes.root}>
          {translated.title}
          <img  alt="profile" src={currentAccount.avatar_url} style={{width: "220px", height: "auto"}} />
          <Typography paragraph>{currentAccount.label}</Typography>
        <Typography paragraph>{currentAccount?.details?.first_name}</Typography>
        <Typography paragraph>{currentAccount?.details?.last_name}</Typography>
        <Typography paragraph>{currentAccount.contact?.email}</Typography>
          <section>
          {currentAccount && (
            <Button variant='contained' onClick={handleSignOut}>
              {translated.signOut}
            </Button>
          )}
        </section>
      </div>
    )
}

export default Profile;