import React from 'react';
import { Typography } from "@material-ui/core";
import { useStore } from "store/hooks";
import ContactLabel from './ContactLabel';
import useStyles from "./styles";
import { useLittera } from "react-littera";
import translations from "./trans";


const People = () => {
    const classes = useStyles();
    const [translated] = useLittera(translations);

    const currentAccount = useStore(state => state.currentAccount);

    return <div className={classes.root}>
        <Typography variant="h2" gutterBottom className={classes.title}>People</Typography>
        <section className={classes.contacts}>
            {
                currentAccount ? 
                currentAccount?.friends && currentAccount.friends.map(friend => <ContactLabel key={friend.account_id} {...friend} />) 
                : <Typography variant="h3" className={classes.text}>{translated.peopleMessage}</Typography>
            }
        </section>
    </div>
}

export default People;