import React from "react";
import useStyles from "./styles";
import { Box, IconButton } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();

  const classes = useStyles();

  const changePeopleView = () => {
    history.push("/home/People");
  };

  const changeRoomsView = () => {
    history.push("/home/Rooms/highlights");
  };

  return (
    <Box className={classes.menu}>
      <IconButton className={classes.icon} onClick={changePeopleView}>
        <PeopleIcon />
      </IconButton>
      <IconButton className={classes.icon} onClick={changeRoomsView}>
        <ChatIcon />
      </IconButton>
    </Box>
  );
};

export default Menu;
