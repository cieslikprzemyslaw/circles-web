import { AccountGetSuggestions } from 'api/commands';
import { useCommand } from 'api/hooks';
import React from 'react';
import { useStore } from 'store/hooks';
import { useForkedState } from "utils/hooks/general";
import { isLoaded } from "api/utils";
import Suggestion from './Suggestion';
import useStyles from "./styles";

const AccountSuggestions = () => {
    const classes = useStyles();
    const currentAccount = useStore(state => state.currentAccount ?? null);

    const suggestionsRq = useCommand(AccountGetSuggestions, currentAccount?.id)
    const [suggestions] = useForkedState(rq => isLoaded(rq) ? rq.data : null, suggestionsRq);

    return (
           <section className={classes.root}>
           {suggestions?.length !== 0 ? suggestions?.map((suggestion:any) => {
               return (                  
                        <Suggestion 
                        suggestion={suggestion}                   
                        />
               )
           }): null}
           </section>
    );
};

export default AccountSuggestions;