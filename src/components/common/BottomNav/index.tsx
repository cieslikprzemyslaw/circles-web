import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ForumIcon from '@material-ui/icons/Forum';
import GroupIcon from '@material-ui/icons/Group';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        bottom: "0",
        position: "fixed",
        width: "100%",
        boxShadow: "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)"
    },
  });

  const TABS = ["highlights", "rooms", "people"];
  
  const BottomNav = ({visible}:{visible: boolean}) => {
    const history = useHistory();
    const location = useLocation();
    const classes = useStyles();
    const [value, setValue] = React.useState(TABS.indexOf(location.pathname.split("/")[2]??"highlights") || 0);
    if (!visible) return null

    return <div>

    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction onClick={() => history.push("/home/highlights")} label="Highlights" icon={<HomeIcon />} />
      <BottomNavigationAction onClick={() => history.push("/home/rooms")} label="Rooms" icon={<ForumIcon />} />
      <BottomNavigationAction onClick={() => history.push("/home/people")} label="People" icon={<GroupIcon />} />
    </BottomNavigation>

    </div>
}


export default BottomNav;