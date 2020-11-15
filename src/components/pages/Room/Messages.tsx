import React, { useCallback, useState, useEffect, useRef } from "react";
import { Typography } from "@material-ui/core";
import { useMessages } from "api/messages";
import { IAccount, IMessage } from "types";
import { useStore } from "store/hooks";
import useStyles from "./styles";
import Flex from "components/utils/Flex";
import cx from "classnames";
import ReactMarkdown from "react-markdown";
import MessagesSkeleton from "./MessagesSkeleton";

const Messages = ({ roomId, accounts }: { roomId: string, accounts: IAccount[] }) => {
    const messages = useMessages(roomId);


    const getAuthor = useCallback((author_id) => accounts.find(account => account.id === author_id) ?? null, [accounts]);
    const currentAccount = useStore(state => state.currentAccount ?? null);

    if (!messages) return <MessagesSkeleton/>

    if (Object.keys(messages).length === 0) return <Typography variant="h2">Say Hi!</Typography>

    return <Flex flexDirection="column-reverse" style={{marginBottom: "15px", overflowY: "scroll", height:"85vh"}}>
        {
            Object.keys(messages).reverse().map((message_id: string, index: number) => {

                const message = messages[message_id];

                return <Message
                    key={message_id}
                    message={message}
                    author={getAuthor(message.author)}
                    displayAvatar={message.author !== messages[Object.keys(messages).reverse()[index - 1]]?.author}
                    isOwnedNextMessage = {message.author === messages[Object.keys(messages).reverse()[index - 1]]?.author}
                    isOwnedPrevMessage = {message.author === messages[Object.keys(messages).reverse()[index + 1]]?.author}
                    isOwned={currentAccount?.id === message.author} />
            })
        }
    </Flex>
}

const Message = ({ message, author, isOwned, displayAvatar, isOwnedNextMessage, isOwnedPrevMessage }: { message: IMessage, author: IAccount | null, isOwned: boolean, displayAvatar: boolean, isOwnedNextMessage: boolean, isOwnedPrevMessage: boolean }) => {
    const classes = useStyles();
    const [height, setHeight] = useState(0);
    const ref = useRef(null);

    let value = message.value;
    try {
        value = atob(message.value);
    } catch (err) {
        console.log(err);
    }

    const rootClasses = cx(classes.message, { [classes.ownedMessage]: isOwned, [classes.notOwnedMessage]: !isOwned, [classes.messageWithManyLines]: height>150, [classes.nextMessageNotOwned]: isOwnedNextMessage && !isOwned, [classes.prevMessageNotOwned]: isOwnedPrevMessage && !isOwned, [classes.nextMessageOwned]: isOwnedNextMessage && isOwned, [classes.prevMessageOwned]: isOwnedPrevMessage && isOwned});
    const bubbleClasses = cx({[classes.ownedMessage]: isOwned ,[classes.messageRoot]: !isOwned ,[classes.equalToLine]: !displayAvatar && !isOwned})

    useEffect(() => {
        setHeight((ref as any).current.offsetHeight);
    }, [])

    return <Flex alignItems="flex-end" className={bubbleClasses} style={{ alignSelf: isOwned ? "flex-end" : "flex-start"}}>
        {displayAvatar && !isOwned && author?.avatar_url && <img alt="author avatar" src={author.avatar_url} className={classes.avatar} />}
        <div className={rootClasses} ref={ref}>
            <ReactMarkdown source={value} />
        </div>
        {console.log(isOwnedPrevMessage, message.author)}
    </Flex>
}

export default Messages;