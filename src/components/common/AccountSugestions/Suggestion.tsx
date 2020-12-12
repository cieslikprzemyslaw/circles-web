import React, { useEffect, useRef } from 'react';
import { AccountInfo } from 'api/commands';
import { useForkedState } from "utils/hooks/general";
import { isLoaded } from "api/utils";
import { useCommand } from 'api/hooks';
import { Card, CardContent, Typography } from '@material-ui/core';
import translations from "./trans";
import { useLittera } from "react-littera";
import { IAccount, TSuggestion } from "types";
import useStyles from "./styles";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Suggestion = ({suggestion, index}: {suggestion: TSuggestion, index: string}) => {
    const classes = useStyles();

    const [translated] = useLittera(translations);
    const { payload, type } = suggestion;
    const scrollRef = useRef(null);

    const accountRq = useCommand(AccountInfo, payload?.account_id);
    const [account] = useForkedState<any, IAccount>(rq => isLoaded(rq) ? rq.data : null, accountRq);
  
    useEffect(() => {
        
    }, [suggestion])

    if (!account) return null; // TODO: Add a loader...

    return (
        <Card className={classes.card} id={index} ref={scrollRef} style={{zIndex: parseInt(index)}}>
                <CardContent>
                <Typography variant="h5">
                    {`${account.details.first_name} ${account.details.last_name}` ?? account.label}
                        </Typography>
                <Typography>
                        {type === "never-messaged" ? translated.firstMessage : type}
                    </Typography>
                </CardContent>
            </Card>
    );
};

export default Suggestion;