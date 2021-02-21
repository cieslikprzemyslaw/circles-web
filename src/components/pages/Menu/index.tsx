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
    history.push("/home/people");
  };

  const changeRoomsView = () => {
    history.push("/home/rooms");
  };

  return (
    <Box className={classes.menu}>
      <IconButton className={classes.icon} onClick={changePeopleView}>
        <PeopleIcon fontSize="large" />
      </IconButton>
      <IconButton className={classes.icon} onClick={changeRoomsView}>
        <ChatIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default Menu;
