import React from 'react';
import { TContact } from 'types';
import { Chip, Avatar } from '@material-ui/core';
import { useAccount } from 'api/hooks';
import useStyles from '../Highlights/styles';


const RecentContact = ({contact}: {contact: TContact}) => {
    const classes = useStyles();
    const account = useAccount(contact.account_id);
    if(!account) return null

return <Chip className={classes.recentContact} avatar={<Avatar alt={account.label} src={account.avatar_url} />} label={account.label}/>
}


export default RecentContact;