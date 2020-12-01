import { AccountGetSuggestions } from 'api/commands';
import { useCommand } from 'api/hooks';
import React from 'react';
import { useStore } from 'store/hooks';
import { useForkedState } from "utils/hooks/general";
import { isLoaded } from "api/utils";
import Suggestion from './Suggestion';
import useStyles from "./styles";
import { TSuggestion } from 'types';

const AccountSuggestions = () => {
    const classes = useStyles();

    const currentAccount = useStore(state => state.currentAccount ?? null);

    const suggestionsRq = useCommand(AccountGetSuggestions, currentAccount?.id)
    const [suggestions] = useForkedState(rq => isLoaded(rq) ? rq.data : null, suggestionsRq);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const scrollTop = e?.currentTarget?.scrollTop ?? 0;
        console.log(scrollTop);
    }

    return (
        <section className={classes.root} onScroll={handleScroll}>
            {suggestions?.length !== 0 &&
                suggestions
                    ?.map((suggestion: TSuggestion, i: number) => <Suggestion key={suggestion.type + i} multiplier={10} index={i} {...suggestion} />)}
           </section>
    );
};

export default AccountSuggestions;