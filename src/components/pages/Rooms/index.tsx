import React from 'react';
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStore } from "store/hooks";
import { IRoom } from "types";
import CreateRoom from "./CreateRoom";



const Rooms = () => {

    const currentAccount = useStore(state => state.currentAccount);

    return <div>
        <Typography variant="h2" gutterBottom>Rooms</Typography>
        {
            currentAccount?.rooms && currentAccount.rooms.map(room => <RoomLabel key={room.id} {...room} />)
        }
        <CreateRoom />
    </div>
}

const RoomLabel = (props: IRoom) => {
    const history = useHistory();

    return <Typography onClick={() => history.push(`/room/${props.id}`)}>{props.label}</Typography>
}

export default Rooms;