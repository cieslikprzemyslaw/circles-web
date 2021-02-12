import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import useStyles from "./styles";
import { Box, IconButton } from '@material-ui/core';
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";

const Menu = ({ parentCallback }: { parentCallback: Function }) => {
    const classes = useStyles();
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    const showRooms = () => {
      parentCallback(true)
    }

    const showPeople = () => {
      parentCallback(false)
    }

    return (
        <>
        <section onClick={toggleMenu}>
            {isOpenMenu ? <MenuOpenIcon className={classes.menuIcon}/> : <MenuIcon className={classes.menuIcon}/>}
            {isOpenMenu && <Box className={classes.menu}>
                <IconButton className={classes.icon} onClick={showPeople}>
                  <PeopleIcon/>
                </IconButton>
                <IconButton className={classes.icon} onClick={showRooms}>
                  <ChatIcon/>
                </IconButton>
            </Box>}
        </section>
        </>  
    );
};

export default Menu;