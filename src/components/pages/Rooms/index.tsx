import React from 'react';
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStore } from "store/hooks";
import { IRoom } from "types";
import CreateRoom from "./CreateRoom";
import useStyles from "./styles";



const Rooms = () => {
    const classes = useStyles();

    const currentAccount = useStore(state => state.currentAccount);

    return (
        <div className={classes.roomWrapper}>
            <CreateRoom />
            <div className={classes.listWrapper}>
                {
                    currentAccount?.rooms && currentAccount.rooms.map(room => <RoomLabel key={room.id} {...room} />)
                }
            </div>
        </div>
    )
}

const RoomLabel = (props: IRoom) => {
    const history = useHistory();
    const classes = useStyles();

    return <div className={classes.roomItemWrapper}>
        <div className={classes.avatarPlaceholder}></div>
        <Typography onClick={() => history.push(`/home/room/${props.id}`)}>{props.label}</Typography>
    </div>
}

export default Rooms;