import { AccountGetSuggestions } from 'api/commands';
import { useCommand } from 'api/hooks';
import React from 'react';
import { useStore } from 'store/hooks';
import { useForkedState } from "utils/hooks/general";
import { isLoaded } from "api/utils";
import Suggestion from './Suggestion';

const AccountSuggestions = () => {
    const currentAccount = useStore(state => state.currentAccount ?? null);

    const suggestionsRq = useCommand(AccountGetSuggestions, currentAccount?.id)
    const [suggestions] = useForkedState(rq => isLoaded(rq) ? rq.data : null, suggestionsRq);

    return (
           <>
           {suggestions?.map((suggestion:any) => {
               return (                  
                        <Suggestion 
                        singleData={suggestion}                   
                        />
               )
           })}
           </>
    );
};

export default AccountSuggestions;