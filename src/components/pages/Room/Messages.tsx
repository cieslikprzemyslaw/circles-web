import React, { useCallback } from "react";
import { CircularProgress } from "@material-ui/core";
import { useMessages } from "api/messages";
import { IAccount, IMessage } from "types";
import { useStore } from "store/hooks";
import useStyles from "./styles";
import Flex from "components/utils/Flex";
import cx from "classnames";
import { validURL } from "utils/general";

const Messages = ({ roomId, accounts }: { roomId: string, accounts: IAccount[] }) => {
    const classes = useStyles();
    const messages = useMessages(roomId);

    const getAuthor = useCallback((author_id) => accounts.find(account => account.id === author_id) ?? null, [accounts]);
    const currentAccount = useStore(state => state.currentAccount ?? null);

    if(!messages) return <CircularProgress />

    return <Flex flexDirection="column-reverse" className={classes.messagesRoot}>
        {
            Object.keys(messages).reverse().map((message_id: string) => {

                const message = messages[message_id];
                return <Message 
                            key={message_id} 
                            message={message} 
                            author={getAuthor(message.author)} 
                            isOwned={currentAccount?.id === message.author} />
            })
        }
    </Flex>
}

const Message = ({ message, author, isOwned }: { message: IMessage, author: IAccount | null, isOwned: boolean }) => {
    const classes = useStyles();

    let value = message.value;
    try {
        value = atob(message.value);
    } catch(err) {
        console.log(err);
    }

    const rootClasses = cx(classes.message, { [classes.ownedMessage]: isOwned, [classes.notOwnedMessage]: !isOwned });

    const valEl = validURL(value) ? 
                    <a href={value} target="_blank" rel="noopener noreferrer">{value}</a> 
                    : value;

    return <Flex alignItems="flex-end" className={classes.messageRoot} style={{ alignSelf: isOwned ? "flex-end" : "flex-start" }}>
        { !isOwned && author?.avatar_url && <img alt="author avatar" src={author.avatar_url} className={classes.avatar} />}
        <div className={rootClasses}>{valEl}</div>
    </Flex>
}

export default Messages;