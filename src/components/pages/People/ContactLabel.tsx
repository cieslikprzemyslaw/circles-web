import { Avatar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { TContact } from "types";
import { useCommand } from 'api/hooks';
import { useForkedState } from 'utils/hooks/general';
import { isLoaded } from 'api/utils';
import { AccountList } from 'api/commands';
import { useStore } from 'store/hooks';
import useStyles from "./styles";

const ContactLabel = (props: TContact) => {
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const classes = useStyles();

    const currentAccount = useStore(state => state.currentAccount);

    const accountsRq = useCommand(AccountList, currentAccount?.friends?.map(friend => friend.account_id));
    const [accounts] = useForkedState(rq => isLoaded(rq) ? rq.data : null, accountsRq)

    useEffect(() => {
        accounts?.forEach((account : any) => {
            if(account.id === props.account_id) {
                return (
                    setName(`${account.name} ${account.surname}`),
                    setAvatar(account.avatar_url)
                )
            }
        })
    })

    console.log(currentAccount, accounts,  props.account_id);

    return (
        <section className={classes.personData}>
            <Avatar className={classes.avatar} alt="user" src={avatar}/>
            <Typography color={props.favorite ? "primary" : "initial"}>
                {name}
            </Typography>
        </section>    
    );
};

export default ContactLabel;