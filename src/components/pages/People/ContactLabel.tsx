import { Avatar, Box, ListItem, Typography } from '@material-ui/core';
import React from 'react';
import { TContact } from "types";
import { useAccount } from 'api/hooks';
import useStyles from "./styles";

const ContactLabel = (props: TContact) => {
    const classes = useStyles();
    const account = useAccount(props.account_id);

    const handleClick = () => {
        // TODO: Open existing chat or create a new room. (1 on 1)
        console.warn("TODO: Open existing chat or create a new room. (1 on 1)");
    }

    if (!account) return null;

    return (
        <ListItem className={classes.personData} onClick={handleClick}>
            <Box>
                <Typography variant="h6" style={{ fontSize: "20px" }}>
                    {account.name()}
                </Typography>
                <Typography className={classes.subtitle}>{account.label}</Typography>
            </Box>
            <Avatar className={classes.avatar} alt={account.name()} src={account.avatar_url} />
        </ListItem>    
    );
};

export default ContactLabel;