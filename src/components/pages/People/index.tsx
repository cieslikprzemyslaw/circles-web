import React from 'react';
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStore } from "store/hooks";
import { TContact } from "types";


const People = () => {

    const currentAccount = useStore(state => state.currentAccount);

    return <div>
        <Typography variant="h2" gutterBottom>People</Typography>
        {
            currentAccount?.contacts && currentAccount.contacts.map(contact => <ContactLabel key={contact.account_id} {...contact} />)
        }
    </div>
}

const ContactLabel = (props: TContact) => {
    const history = useHistory();

    return <Typography color={props.favorite ? "primary" : "initial"}>{props.account_id}</Typography>
}


export default People;