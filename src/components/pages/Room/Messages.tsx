import React, { useCallback, useState, useEffect, useRef } from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import { useMessages } from "api/messages";
import { IAccount, IMessage } from "types";
import { useStore } from "store/hooks";
import useStyles from "./styles";
import Flex from "components/utils/Flex";
import cx from "classnames";
import ReactMarkdown from "react-markdown";



const Messages = ({ roomId, accounts }: { roomId: string, accounts: IAccount[] }) => {
    const classes = useStyles();
    const messages = useMessages(roomId);


    const getAuthor = useCallback((author_id) => accounts.find(account => account.id === author_id) ?? null, [accounts]);
    const currentAccount = useStore(state => state.currentAccount ?? null);

    if (!messages) return <CircularProgress />

    if (Object.keys(messages).length === 0) return <Typography variant="h2">Say Hi!</Typography>

    // console.log(messages instanceof Array)
    // console.log(messages instanceof Object)
    console.log(messages)

    // Object.keys(messages).
    const messagesClasses = cx(classes.messagesRoot, "messages-container")

    return <Flex flexDirection="column-reverse" className={messagesClasses}>
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
    const [isHeightMessage, setIsHeightMessage] = useState(false)

    let value = message.value;
    try {
        value = atob(message.value);
    } catch (err) {
        console.log(err);
    }

    const rootClasses = cx(classes.message, { [classes.ownedMessage]: isOwned, [classes.notOwnedMessage]: !isOwned });

    useEffect(() => {
        let elements = document.querySelectorAll(".messages-container > div");
        let height = elements.forEach(message => {
            //When we fix bug with roll text we know exacly how higher shuld be element with 4 lines then we can change px
            if(message.clientHeight >= 150) {
                message.className = classes.messageManyLinesRoot
            }
        })
        return height;
    })

    // margin: isHeightMessage ? "8px": "15px"

    return <Flex alignItems="flex-end" className={isOwned ? classes.ownedMessage : classes.messageRoot} style={{ alignSelf: isOwned ? "flex-end" : "flex-start"}}>
    {!isOwned && author?.avatar_url && <img alt="author avatar" src={author.avatar_url} className={classes.avatar} />}
    <div className={rootClasses}>
        <ReactMarkdown source={value} />
    </div>
</Flex>
}

export default Messages;