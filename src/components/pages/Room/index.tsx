import React from "react";
import Flex from "components/utils/Flex";
import RoomView from "./RoomView";
import RecentRooms from "./RecentRooms";

/**
 * Room page component.
 */
const Room = () => {

    return <Flex width="100%">
        <RecentRooms />
        <RoomView />
    </Flex>
}

export default Room;
