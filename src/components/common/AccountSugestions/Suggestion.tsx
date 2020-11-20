import React, { useState, useEffect } from 'react';
import { useStore } from 'store/hooks';
import { AccountList } from 'api/commands';
import { useForkedState } from "utils/hooks/general";
import { isLoaded } from "api/utils";
import { useCommand } from 'api/hooks';
import { Card, CardContent, Typography } from '@material-ui/core';
import translations from "./trans";
import { useLittera } from "react-littera";
import { TSuggestion } from "types";

const Suggestion = ({singleData}: {singleData: TSuggestion}) => {
    const currentAccount = useStore(state => state.currentAccount ?? null);

    const [translated] = useLittera(translations);
    const {payload, type} = singleData;
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')

    const accountsRq = useCommand(AccountList, currentAccount?.contacts?.map(contact => contact.account_id));
    const [accounts] = useForkedState(rq => isLoaded(rq) ? rq.data : null, accountsRq)
  
    useEffect(() => {
        accounts?.forEach((account : any) => {
            if(account.id === payload?.account_id) {
                return (
                    setName(`${account.name} ${account.surname}`),
                    setAvatar(account.avatar_url)
                )
            }
        })
    })
    
    return (
            <Card style={{margin: "10px auto", width: "50%"}}>
                <CardContent>
                    <Typography variant="h3" component="h3">
                        <img src={avatar} alt="user" style={{height:"64px"}}/> {name}
                    </Typography>
                    <Typography variant="h4" component="h4">
                        {type === "never-messaged" ? translated.firstMessage : type}
                    </Typography>
                </CardContent>
            </Card>
    );
};

export default Suggestion;