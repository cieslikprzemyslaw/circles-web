import React, { useState, useEffect } from 'react';
import Rooms from '../Rooms'
import useStyles from "./styles";
import Logo from 'components/common/Logo';
import HomeLayouts from 'HomeLayouts';
import People from '../People';
import { useHistory } from 'react-router-dom';
import { useStore } from 'store/hooks';
import { Avatar, Drawer } from '@material-ui/core';
import Profile from '../Profile';
import Menu from '../Menu';
import Flex from 'components/utils/Flex';

function Home() {
  const classes = useStyles();
  const history = useHistory();
  const currentAccount = useStore(state => state.currentAccount);

  const [shownProfileDrawer, setShownProfileDrawer] = useState(false);
  const openProfileDrawer = () => setShownProfileDrawer(true);
  const closeProfileDrawer = () => setShownProfileDrawer(false);

  const [isRoomsView] = useState(true);

  useEffect(() => {
    history.push("/home/highlights");
  })

  return (
    <>
      <Flex flexDirection='row'>
          <Avatar className={classes.avatar} alt="user" src={currentAccount?.avatar_url} onClick={openProfileDrawer}/>
      </Flex>
      
      <section className={classes.root}>
        <div className={classes.sidebar}>
          <Menu />
        </div>
        <div className={classes.container}>
          <section className={classes.topMenu}>
            {/* top Menu */}
            <Logo style={{ fontSize: "56px", margin: "16px 0" }} />
          </section>
          <main className={classes.mainSection}>
            {/* new conversation and Layouts for home screen */}
            {isRoomsView ? <Rooms /> : <People />}
            <HomeLayouts />
          </main>
        </div>
      </section>
      <div className={classes.backgroundImageBacklit} ></div>
      <div className={classes.backgroundImage} ></div>
      
      <Drawer anchor="right" open={shownProfileDrawer} onClose={closeProfileDrawer}>
        <div style={{ width: "55vw", height: "100vh", backgroundColor: "#FFF" }}>
          <Profile/>
        </div>
      </Drawer>
    </>
  );
}

export default Home;
