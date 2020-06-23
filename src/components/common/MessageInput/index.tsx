import React from "react";
import useStyles from "./styles";

// TODO: ref type.
const MessageInput = (props: { ref?: any, value: string, onChange: (event: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => void, onSubmit?: () => void }) => {
    const classes = useStyles();

    const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if(event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            props.onSubmit && props.onSubmit();
        }
    }

    return <div className={classes.root}>
        <textarea onKeyPress={handleKeyPress} ref={props.ref} value={props.value} onChange={props.onChange} placeholder="Write your message..." className={classes.inputElement} />
    </div>
}

export default MessageInput;