import React from "react";
import useStyles from "./styles";
import { Box, IconButton } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleNavigation = (path: string) => () => {
    history.push(path);
  }

  return (
    <Box className={classes.menu}>

      <IconButton className={classes.icon} onClick={handleNavigation("/home/people")}>
        <PeopleIcon />
      </IconButton>

      <IconButton className={classes.icon} onClick={handleNavigation("/home/rooms")}>
        <ChatIcon />
      </IconButton>

    </Box>
  );
};

export default Menu;
