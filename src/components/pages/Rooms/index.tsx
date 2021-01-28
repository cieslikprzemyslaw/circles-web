import React from 'react';
import { Avatar, Typography, Box } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { useHistory } from "react-router-dom";
import { useStore } from "store/hooks";
import { IAccount, IRoom } from "types";
import CreateRoom from "./CreateRoom";
import useStyles from "./styles";
import { useAccount, useRoom } from 'api/hooks';
import { makeFullName, makeInitials } from 'utils/general';
import { useMessages } from 'api/messages';

const Rooms = () => {
    const classes = useStyles();

    const currentAccount = useStore(state => state.currentAccount);

    return (
        <Box className={classes.roomWrapper}>
            <CreateRoom />
            <Box className={classes.listWrapper}>
                {
                    currentAccount?.rooms && currentAccount.rooms.map(room => <RoomLabel key={room.id} {...room} />)
                }
            </Box>
        </Box>
    )
}

const RoomLabel = (props: IRoom) => {
    const history = useHistory();
    const classes = useStyles();

    const roomUri = `/home/room/${props.id}`;
    const handleNavigation = () => history.push(roomUri);

    const account = useAccount();
    const room = useRoom(props.id, true);
    const messages = useMessages(props.id);

    if (!room || !room.accounts) return null;

    const lastMessage = Object.values(messages)[Object.keys(messages).length - 1];

    let lastMessageValue: string | null = lastMessage?.value ?? null;
    try {
        if (lastMessageValue)
            lastMessageValue = atob(lastMessage.value);
    } catch (err) {
        lastMessageValue = null;
        console.log(err);
    }

    return <Box onClick={handleNavigation} className={classes.roomItemWrapper}>
        <Box style={{ marginRight: "10px", maxWidth: "220px" }}>
            <Typography variant="h6" style={{ fontSize: "20px" }}>{props.label}</Typography>
            {lastMessageValue && <Typography className={classes.lastMessageTypography}>{lastMessageValue}</Typography>}
        </Box>
        <AvatarGroup style={{}} max={3} spacing={16}>
            {room.accounts?.filter(acc => acc.id !== account?.id).map(accountsMap)}
        </AvatarGroup>
    </Box>
}

const accountsMap = (account: IAccount) => {
    const accountFullName = makeFullName(account.details?.first_name, account.details?.last_name, account.label);
    const accountInitials = makeInitials(account.details?.first_name, account.details?.last_name, account.label);

    return <Avatar alt={accountFullName} src={account.avatar_url}>
        {accountInitials}
    </Avatar>
}

export default Rooms;