import React from "react"
import { useStore } from "store/hooks";
import { IRoom } from "types";
import { useHistory } from "react-router-dom";

/**
 * @deprecated since we changed the layout.
 */
const RecentRooms = ({ currentRoomId }: { currentRoomId: string }) => {
    const currentAccount = useStore(state => state.currentAccount);

    return <div style={{flexBasis: "30%", maxWidth: "30%",}}>
        <section style={{position: "fixed", top: "0", left: "0", maxWidth: "30%"}}>
        {
            (currentAccount?.rooms ?? [])
                .sort(room => room.id === currentRoomId ? -1 : 1)
                .map(room => <RecentRoom room={room} currentRoomId={currentRoomId} />)
        }
        </section>  
    </div>
}

/**
 * @deprecated since we changed the layout.
 */
const RecentRoom = ({ room, currentRoomId }: { room: IRoom, currentRoomId: string }) => {
    const history = useHistory();

    if(room.id === currentRoomId) return <p><b>{room.label}</b></p>

    const handleClick = () => {
        history.push(`/room/${room.id}`)
    }

    return <p onClick={handleClick}>{room.label}</p>
}


export default RecentRooms;