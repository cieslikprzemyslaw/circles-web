import { Card, CardContent, Typography } from '@material-ui/core';
import { AccountGetSuggestions } from 'api/commands';
import { useCommand } from 'api/hooks';
import React from 'react';
import { useStore } from 'store/hooks';
import { useForkedState } from "utils/hooks/general";
import { isLoaded } from "api/utils";

const AccountSuggestions = () => {
    const currentAccount = useStore(state => state.currentAccount ?? null);

    const suggestionsRq = useCommand(AccountGetSuggestions, currentAccount?.id)
    const [suggestions] = useForkedState(rq => isLoaded(rq) ? rq.data : null, suggestionsRq);
    
    console.log(suggestions)

    return (
           <>
           {suggestions?.map((suggestion:any) => {
               return (
                <Card>
                    <div>
                        <CardContent>
                            
                        </CardContent>
                    </div>
                </Card>
               )
           })}
           </>
    );
};

export default AccountSuggestions;