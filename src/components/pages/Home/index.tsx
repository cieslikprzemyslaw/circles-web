import React, { useState, useEffect } from 'react';
import useStyles from "./styles";
import { Route, useHistory } from 'react-router-dom';
import { useStore } from 'store/hooks';
import { backgroundThemes } from 'utils/backgroundThemes';
import Menu from '../Menu';
import TopMenu from 'components/common/TopMenu';

const HighlightsLazy = React.lazy(() => import("../Highlights/"));
const RoomLazy = React.lazy(() => import("../Room/"));

const RoomsLazy = React.lazy(() => import("../Rooms/"));
const PeopleLazy = React.lazy(() => import("../People/"));

function Home() {
  const classes = useStyles();
  const history = useHistory();


  // @ts-ignore
  const bgTheme = useStore(state => state?.preferences?.backgroundTheme || backgroundThemes[0])

  const [isRoomsView, setIsRoomView] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    history.push("/home/Rooms/highlights");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <section className={classes.root}>
        <div className={classes.sidebar}>
          <Menu/>
        </div>
        <div className={classes.container}>
          <TopMenu />
          <main className={classes.mainSection}>
            {/* new conversation and Layouts for home screen */}
            <Route path="/home/Rooms" component={RoomsLazy} />
            <Route path="/home/People" component={PeopleLazy} />
            <Route path="/home/Rooms/highlights" component={HighlightsLazy} />
            <Route path="/home/Rooms/room/:id" component={RoomLazy} />
          </main>
        </div>
      </section>
      <div className={classes.backgroundImageBacklit}></div>
      <div
        className={classes.backgroundImage}
        style={{
          backgroundImage: `url(${bgTheme?.url}${window.innerWidth}x${window.innerHeight})`,
        }}
      ></div>
    </>
  );
}

export default Home;
