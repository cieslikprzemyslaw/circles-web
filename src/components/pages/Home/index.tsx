import React from "react";
import { useLittera } from "react-littera";
import useStyles from "./styles"
import translations from "./trans"
import { Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStore, useDispatch } from "store/hooks";
import { signOut } from "api/auth";
import { useStorageSetter } from "storage/hooks";
import { setCurrentAccount } from "store/actions";
import Flex from "components/utils/Flex";
import { IRoom } from "types";
import CreateRoom from "./CreateRoom";



/**
 * Home page component.
 */
const Home = () => {
    const history = useHistory();
    const [translated] = useLittera(translations);
    const classes = useStyles();
    const storageSetter = useStorageSetter();
    const storeDispatch = useDispatch();

    const currentAccount = useStore(state => state.currentAccount);

    const handleSignOut = async () => {
        await signOut();
        storageSetter("accountIdToken");
        storeDispatch(setCurrentAccount(null));
        history.push("/login");
    }

    return <div className={classes.root}>
        {translated.title}
        <Flex flexDirection="row" alignItems="center" justifyContent="space-between">
            {currentAccount && <Button onClick={() => history.push("/profile")}>{currentAccount.label} Profile</Button>}
            {currentAccount && <Button variant="contained" onClick={handleSignOut}>Sign out</Button>}
        </Flex>

        <br/>
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

export default Home;