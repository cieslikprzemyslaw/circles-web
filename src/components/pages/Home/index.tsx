import React, { useState, useEffect } from 'react';
import Rooms from '../Rooms'
import useStyles from "./styles";
import Logo from 'components/common/Logo';
import People from '../People';
import { Route, useHistory } from 'react-router-dom';
import SettingsDrawer from 'components/common/SettingsDrawer';
import { useStore } from 'store/hooks';
import { backgroundThemes } from 'utils/backgroundThemes';
import { Avatar, Drawer } from '@material-ui/core';
import Profile from '../Profile';
import Menu from '../Menu';
import Flex from 'components/utils/Flex';
import { Highlights, Room } from '..';

function Home() {
  const classes = useStyles();
  const history = useHistory();
  const currentAccount = useStore(state => state.currentAccount);

  const [shownProfileDrawer, setShownProfileDrawer] = useState(false);
  const openProfileDrawer = () => setShownProfileDrawer(true);
  const closeProfileDrawer = () => setShownProfileDrawer(false);

  // @ts-ignore
  const bgTheme = useStore(state => state?.preferences?.backgroundTheme || backgroundThemes[0])

  const [isRoomsView] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    history.push("/home/highlights");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleNavigation = (path: string) => () =>
    history.push(path)


  return (
    <>
      <section className={classes.root}>
        <div className={classes.sidebar}>
          <Menu />
        </div>
        <div className={classes.container}>
          <section className={classes.topMenu}>
            {/* top Menu */}
            <Logo style={{ fontSize: "56px", margin: "16px 0" }} onClick={handleNavigation('/home/highlights')} />
            <Flex justifyContent="flex-end" alignItems="center" className={classes.menuBar}>
              <SettingsDrawer />
              <Avatar className={classes.avatar} alt="user" src={currentAccount?.avatar_url} onClick={openProfileDrawer} />
            </Flex>
          </section>
          <main className={classes.mainSection}>
            {/* new conversation and Layouts for home screen */}
            {isRoomsView ? <Rooms /> : <People />}
            <Route path="/home/highlights" component={Highlights} />
            <Route path="/home/room/:id" component={Room} /> 
          </main>
        </div>
      </section>
      <div className={classes.backgroundImageBacklit} ></div>
      <div className={classes.backgroundImage} style={{ backgroundImage: `url(${bgTheme?.url}${window.innerWidth}x${window.innerHeight})` }} ></div>

      <Drawer anchor="right" open={shownProfileDrawer} onClose={closeProfileDrawer}>
        <div style={{ width: "55vw", height: "100vh", backgroundColor: "#FFF" }}>
          <Profile />
        </div>
      </Drawer>
    </>
  );
}

export default Home;
