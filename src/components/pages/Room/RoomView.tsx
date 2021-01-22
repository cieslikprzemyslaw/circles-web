import React from "react";
import { useParams } from "react-router-dom";
import { useStore } from "store/hooks";
import { Typography } from "@material-ui/core";
import Messages from "./Messages";
import MessageForm from "./MessageForm";
import { useRoom } from "api/hooks";
import { useMessageSubmit } from "api/messages";
import MessagesSkeleton from "./MessagesSkeleton";
import useStyles from './styles';

// TODO: Show skeleton when switching rooms.
const RoomView = () => {
    const params = useParams<{id: string}>();
    const classes = useStyles();

    const currentAccount = useStore(state => state.currentAccount);
    const room = useRoom(params.id);
    const submitMessage = useMessageSubmit(params.id, currentAccount?.id ?? "");

    return <div className={classes.root}>
        {(!room || !room.id) ?
            <MessagesSkeleton />
            :
            <>
                <Typography variant="h4" className={classes.roomTitle}>{room.label}</Typography>
            
                <div>
                    <Messages accounts={room?.accounts ?? []} roomId={room.id} />
                    <MessageForm onSubmit={submitMessage} />
                </div>
            </>}
    </div>
}

export default RoomView;
