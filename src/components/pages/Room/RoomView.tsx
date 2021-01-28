import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "store/hooks";
import { Typography, Box } from "@material-ui/core";
import Messages from "./Messages";
import MessageForm from "./MessageForm";
import { useRoom } from "api/hooks";
import { useMessageSubmit } from "api/messages";
import MessagesSkeleton from "./MessagesSkeleton";
import useStyles from './styles';
import { ensureArray, makeFullName } from "utils/general";

// TODO: Show skeleton when switching rooms.
const RoomView = () => {
    const params = useParams<{id: string}>();
    const classes = useStyles();

    const currentAccount = useStore(state => state.currentAccount);
    const room = useRoom(params.id);
    const submitMessage = useMessageSubmit(params.id, currentAccount?.id ?? "");

    const roomMembers = ensureArray(room?.accounts).filter(acc => acc.id !== currentAccount?.id);
    const reducedRoomMembers = roomMembers.map(acc => makeFullName(acc?.details?.first_name, acc?.details?.last_name, acc?.label))
    const roomName = roomMembers.length > 1 ? room?.label : reducedRoomMembers[0];

    const membersEl = useMemo(() => {
        let result = reducedRoomMembers.slice(0, 3).join(", ");

        if (reducedRoomMembers.length > 3) {
            // TODO: Include translations - requires react-littera upgrade.
            result += ` and ${reducedRoomMembers.length - 3} more`
        }

        return result;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reducedRoomMembers.length]);

    return <Box className={classes.root}>
        {(!room || !room.id) ?
            <MessagesSkeleton />
            :
            <>
                <Box className={classes.chatBoxHeader} display="flex" justifyContent="space-between" alignItems="center">
                    <Box className={classes.roomTitleBox}>
                        <Typography variant="h5" className={classes.roomTitle}>{roomName}</Typography>
                        {roomMembers.length > 1 && <Typography style={{ opacity: 0.65 }}>{membersEl}</Typography>}
                    </Box>
                </Box>
            
                <Box>
                    <Messages accounts={room?.accounts ?? []} roomId={room.id} />
                    <MessageForm onSubmit={submitMessage} />
                </Box>
            </>}
    </Box>
}

export default RoomView;
