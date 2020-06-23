import React from "react";
import Flex from "components/utils/Flex";
import RoomView from "./RoomView";
import RecentRooms from "./RecentRooms";
import { useParams } from "react-router-dom";
import { useMediaQuery, useTheme } from "@material-ui/core";

/**
 * Room page component.
 */
const Room = () => {
    const theme = useTheme();
    const isMobileOnly = useMediaQuery(theme.breakpoints.down('sm'));
    const params = useParams<{id: string}>();

    return <Flex width="100%" height="100vh">
        {!isMobileOnly && <RecentRooms currentRoomId={params.id} />}
        <RoomView />
    </Flex>
}

export default Room;
