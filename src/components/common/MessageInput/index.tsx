import { TextField } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

// TODO: ref type.
const MessageInput = (props: { inputRef?: any, value: string, onChange: (event: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => void, onSubmit?: () => void }) => {
    const classes = useStyles();

    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if(event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            props.onSubmit && props.onSubmit();
        }
    }

    return <TextField onKeyPress={handleKeyPress} ref={props.inputRef} fullWidth value={props.value} onChange={props.onChange} placeholder="Write your message..." className={classes.root} variant="outlined" />
}

export default MessageInput;