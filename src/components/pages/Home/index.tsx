import React, { useState, useEffect } from 'react';
import Menu from '../Menu';
import Rooms from '../Rooms'
import useStyles from "./styles";
import Logo from 'components/common/Logo';
import HomeLayouts from 'HomeLayouts';
import People from '../People';
import { useHistory } from 'react-router-dom';
import SettingsDrawer from 'components/common/SettingsDrawer';
import { useStore } from 'store/hooks';
import { backgroundThemes } from 'utils/backgroundThemes';

function Home() {
  const classes = useStyles();
  const history = useHistory();

  const [isRoomsView] = useState(true);

  // @ts-ignore
  const bgTheme = useStore(state => state?.preferences?.backgroundTheme || backgroundThemes[0])

  useEffect(() => {
    history.push("/home/highlights");
  }, [history])

  // toggle funcion for future change cards beetwen Rooms and People
  // const toggleView = () => {
  //   setIsRoomView(!isRoomsView);
  // }
  
  return(
    <>
      <section className={classes.root}>
        <div className={classes.sidebar}>
          <Menu />
        </div>
        <div className={classes.container}>
          <section className={classes.topMenu}>
            {/* top Menu */}
            <Logo style={{ fontSize: "56px", margin: "16px 0" }} />
            <div>
              <SettingsDrawer />
            </div>
          </section>
          <main className={classes.mainSection}>
            {/* new conversation and highlights */}
            {isRoomsView ? <Rooms/> : <People/>}
            <HomeLayouts/>
          </main> 
        </div>
      </section>
      <div className={classes.backgroundImageBacklit} ></div>
      <div className={classes.backgroundImage} style={{ backgroundImage: `url(${bgTheme?.url}${window.innerWidth}x${window.innerHeight})` }} ></div>
    </>
  );
}

export default Home;
