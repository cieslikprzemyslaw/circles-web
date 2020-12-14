import React, { useState, useEffect } from 'react';
import Menu from '../Menu';
import Rooms from '../Rooms'
import useStyles from "./styles";
import Logo from 'components/common/Logo';
import HomeLayouts from 'HomeLayouts';
import People from '../People';
import { useHistory } from 'react-router-dom';

function Home() {
  const classes = useStyles();
  const history = useHistory();

  const [isRoomsView, setIsRoomView] = useState(true);

  useEffect(() => {
    history.push("/home/highlights");
  }, [])

  const toggleView = () => {
    setIsRoomView(!isRoomsView);
  }
  
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
          </section>
          <main className={classes.mainSection}>
            {/* new conversation and highlights */}
            {isRoomsView ? <Rooms/> : <People/>}
            <HomeLayouts/>
          </main> 
        </div>
      </section>
      <div className={classes.backgroundImageBacklit} ></div>
      <div className={classes.backgroundImage} ></div>
    </>
  );
}

export default Home;
