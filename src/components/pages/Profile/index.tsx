import React from "react";
import { useLittera } from "react-littera";
import useStyles from "./styles"
import translations from "./trans"
import { CircularProgress, Typography } from "@material-ui/core";
import { useAccount } from "api/hooks";


/**
 * Profile page component.
 */
const Profile = () => {
    const [translated] = useLittera(translations);
    const classes = useStyles();

    const currentAccount = useAccount(undefined, true);

    if(!currentAccount) return <CircularProgress />

    return <div className={classes.root}>
        {translated.title}
        <img  alt="profile" src={currentAccount.avatar_url} style={{width: "220px", height: "auto"}} />
        <Typography paragraph>{currentAccount.label}</Typography>
        <Typography paragraph>{currentAccount.name}</Typography>
        <Typography paragraph>{currentAccount.surname}</Typography>
        <Typography paragraph>{currentAccount.email}</Typography>
        <br/>
        <Typography variant="h3">Contacts:</Typography>
        {
            currentAccount?.contacts && currentAccount.contacts.map(contact => <Contact key={contact.account_id} {...contact} />)
        }
    </div>
}

const Contact = (props: { account_id: string, favorite?: boolean }) => {
    const account = useAccount(props.account_id, false, { flags: true, rooms: true, contacts: true });

    if(!account) return <div>...</div>

    return <div style={{border: "1px solid #121212"}}>
        <img  alt="profile" src={account.avatar_url} style={{width: "220px", height: "auto"}} />
        <Typography gutterBottom variant="h4">{account.label}</Typography>
        <Typography >{account.name} {account.surname}</Typography>
        <Typography>Is favorite? {props.favorite ? "true" : "false"}</Typography>
    </div>
}

export default Profile;