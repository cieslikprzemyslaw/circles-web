import React from "react";
import { useLittera } from "react-littera";
import useStyles from "./styles"
import translations from "./trans"
import { Typography, CircularProgress } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { useStore } from "store/hooks";
import { useRoom, useAccount } from "api/hooks";


/**
 * Room page component.
 */
const Room = () => {
    const params = useParams<{id: string}>();
    const classes = useStyles();

    const currentAccount = useStore(state => state.currentAccount);
    const room = useRoom(params.id);

    if(!room) return <CircularProgress />

    

    return <div className={classes.root}>
        <Typography variant="h3">{room.label}</Typography>


        <Typography variant="h4">People in room:</Typography>
        {
            room?.access?.map(account_id => <AccountLabel key={account_id} account_id={account_id} />)
        }
        <br/>
        Room messages down here =<br/>
    </div>
}

const AccountLabel = (props: { account_id: string }) => {
    const account = useAccount(props.account_id, false);

    if(!account) return <>...</>

    return <Typography>{account.label}</Typography>
}

export default Room;