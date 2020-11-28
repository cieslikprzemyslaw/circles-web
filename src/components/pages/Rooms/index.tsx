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
        <div className={classes.roomWraper}>
            <CreateRoom />
            {
                currentAccount?.rooms && currentAccount.rooms.map(room => <RoomLabel key={room.id} {...room} />)
            }
        </div>
    )
}

const RoomLabel = (props: IRoom) => {
    const history = useHistory();

    return <Typography onClick={() => history.push(`/room/${props.id}`)}>{props.label}</Typography>
}

export default Rooms;