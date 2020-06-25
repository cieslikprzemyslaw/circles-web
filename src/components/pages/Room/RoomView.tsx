import React from "react";
import { useParams } from "react-router-dom";
import useStyles from "../Splash/styles";
import { useStore } from "store/hooks";
import { CircularProgress } from "@material-ui/core";
import Messages from "./Messages";
import MessageForm from "./MessageForm";
import { useRoom } from "api/hooks";
import { useMessageSubmit } from "api/messages";

const RoomView = () => {
    const params = useParams<{id: string}>();
    const classes = useStyles();

    const currentAccount = useStore(state => state.currentAccount);
    const room = useRoom(params.id);
    const submitMessage = useMessageSubmit(params.id, currentAccount?.id ?? "");

    if(!room || !room.id) return <CircularProgress />

    return <div className={classes.root}>
        
        {/* <Flex justifyContent="flex-start">
                <Typography variant="h4">{room.label}</Typography>
        </Flex>
        <hr style={{width: "70vw"}}/>
        <br/>*/}
        <Messages accounts={room?.accounts ?? []} roomId={room.id} />
        <MessageForm onSubmit={submitMessage} />
    </div>
}

export default RoomView;
