import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const MessageForm = (props: { onSubmit: (value: string) => void }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(input.length > 0) {
            props.onSubmit(input);
            setInput("");
        }
    }
    
    const handleChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // @ts-ignore
        setInput(event.target?.value ?? "");
    }

    return <form id="message-form" style={{width: "100%", position: "relative", display: "flex",}} onSubmit={handleSubmit}>
        <TextField autoComplete="off" fullWidth value={input} onChange={handleChange} type="text" id="message-textfield" />
        <Button type="submit" id="message-submit">Submit</Button>
    </form>
}

export default MessageForm;