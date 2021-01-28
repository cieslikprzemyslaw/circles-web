import React, { useState, useRef } from 'react';
import { IconButton, Icon, Box } from '@material-ui/core';
import MessageInput from 'components/common/MessageInput';
import { sendPushNotification } from "api/fcm";
import useStyles from './styles';

const MessageForm = (props: { onSubmit: (value: string) => void }) => {
    const [input, setInput] = useState("");
    const classes = useStyles();
    const ref = useRef<HTMLInputElement | undefined>();

    const handleTextFieldFocus = () => {
        if(ref.current)
            ref.current?.focus();
    }

    const handleSubmit = async (event?: React.FormEvent<HTMLFormElement>) => {
        if(event) event.preventDefault();

        if(input.length > 0) {
            try {
                props.onSubmit(btoa(input));
                setInput("");
                handleTextFieldFocus();

                await sendPushNotification(["dcSXVLtXIAUTyhxv_vpAOC:APA91bE-13ugAh4qEcf8PT3n1r84pbIGZ2Hm5xv4S054SO_wRs3mGM0xCw-0nphyB7wYVthrL6lGZR8qy6qx1--wzUIuqACVNGfow29Lf1EdA-Bh6bb1-VPgiGtx-EF_Z1KPxRu6nZE4"], "New message", input);
            } catch(err) {
                console.log(err);
                alert("Message contains invalid characters.")
            }
        }
    }
    
    const handleChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // @ts-ignore
        setInput(event.target?.value ?? "");
    }

    return <form id="message-form" className={classes.inputContainer} onSubmit={handleSubmit}>
        <Box className={classes.inputBackground}>
            <MessageInput inputRef={ref} value={input} onChange={handleChange} onSubmit={handleSubmit} />
            <IconButton onClick={() => handleSubmit()}>
                <Icon color="primary">send</Icon>
            </IconButton>
        </Box>
    </form>
}

export default MessageForm;