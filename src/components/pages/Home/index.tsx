import React, { useState, useEffect } from 'react';
import Rooms from '../Rooms'
import useStyles from "./styles";
import People from '../People';
import { Route, useHistory } from 'react-router-dom';
import { useStore } from 'store/hooks';
import { backgroundThemes } from 'utils/backgroundThemes';
import Menu from '../Menu';
import { Highlights, Room } from '..';
import TopMenu from 'components/common/TopMenu';

function Home() {
  const classes = useStyles();
  const history = useHistory();


  // @ts-ignore
  const bgTheme = useStore(state => state?.preferences?.backgroundTheme || backgroundThemes[0])

  const [isRoomsView] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    history.push("/home/highlights");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <section className={classes.root}>
        <div className={classes.sidebar}>
          <Menu />
        </div>
        <div className={classes.container}>
          <TopMenu />
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
    </>
  );
}

export default Home;
