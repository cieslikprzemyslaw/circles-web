import React, { useState } from "react";
import useStyles from "./styles"
import { Typography, CircularProgress, TextField, Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
//import { useStore } from "store/hooks";
import { useRoom, useAccount } from "api/hooks";
import { useMessages, useMessageSubmit } from "api/messages";
import { useStore } from "store/hooks";


/**
 * Room page component.
 */
const Room = () => {
    const params = useParams<{id: string}>();
    const classes = useStyles();

    const currentAccount = useStore(state => state.currentAccount);
    const room = useRoom(params.id);
    const submitMessage = useMessageSubmit(params.id, currentAccount?.id ?? "");

    if(!room || !room.id) return <CircularProgress />
    

    return <div className={classes.root}>
        <Typography variant="h3">{room.label}</Typography>


        <Typography variant="h4">People in room:</Typography>
        {
            room?.access?.map(account_id => <AccountLabel key={account_id} account_id={account_id} />)
        }
        <br/>
        <Messages roomId={room.id} />
        <MessageForm onSubmit={submitMessage} />
    </div>
}

const AccountLabel = (props: { account_id: string }) => {
    const account = useAccount(props.account_id, false);

    if(!account) return <>...</>

    return <Typography>{account.label}</Typography>
}

const Messages = ({roomId}: {roomId: string}) => {
    const messages = useMessages(roomId);

    if(!messages) return <CircularProgress />
    
    return <>
        {
            Object.keys(messages).map((message_id: string) => {
                const message = messages[message_id];
                return <div key={message_id}>{message.author}: {message.value}</div>
            })
        }
    </>
}

const MessageForm = (props: { onSubmit: (value: string) => void }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onSubmit(input);
        setInput("");
    }
    
    const handleChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // @ts-ignore
        setInput(event.target?.value ?? "");
    }

    return <form id="message-form" onSubmit={handleSubmit}>
        <TextField value={input} onChange={handleChange} type="text" id="message-textfield" />
        <Button type="submit" id="message-submit">Submit</Button>
    </form>
}

export default Room;
