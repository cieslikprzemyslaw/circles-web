import React from 'react';
import { AccountInfo } from 'api/commands';
import { useForkedState } from "utils/hooks/general";
import { isLoaded } from "api/utils";
import { useCommand } from 'api/hooks';
import { Card, CardContent, Typography } from '@material-ui/core';
import translations from "./trans";
import { useLittera } from "react-littera";
import { IAccount, TSuggestion } from "types";
import useStyles from "./styles";

const Suggestion = (suggestion: TSuggestion & { index: number, multiplier: number }) => {
    const classes = useStyles();

    const [translated] = useLittera(translations);
    const { payload, type } = suggestion;

    const accountRq = useCommand(AccountInfo, payload?.account_id);
    const [account] = useForkedState<any, IAccount>(rq => isLoaded(rq) ? rq.data : null, accountRq);

    if (!account) return null; // TODO: Add a loader...

    const zIndex = suggestion.index;
    let transform = zIndex * suggestion.multiplier;
    let elevation = zIndex || 0;
    if (elevation > 24) elevation = 24;

    return (
        <Card elevation={elevation} className={classes.card} style={{ zIndex: zIndex + 5, position: "relative", transform: `translateY(${transform}px)` }}>
                <CardContent>
                <Typography variant="h5">
                    {account.name ?? account.label}
                        </Typography>
                <Typography>
                        {type === "never-messaged" ? translated.firstMessage : type}
                    </Typography>
                </CardContent>
            </Card>
    );
};

export default Suggestion;