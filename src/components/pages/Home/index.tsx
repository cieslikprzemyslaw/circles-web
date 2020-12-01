import React from 'react';
import { useEffect } from 'react';
import Highlights from '../Highlights';
import Menu from '../Menu';
import Rooms from '../Rooms'
import useStyles from "./styles";
import Logo from 'components/common/Logo';

function Home() {
  const classes = useStyles();
  
    useEffect(() => {
      
    }, []);
  
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
            <Rooms/>
            <Highlights/>
          </main> 
        </div>
      </section>
      <div className={classes.backgroundImageBacklit} ></div>
      <div className={classes.backgroundImage} ></div>
    </>
  );
}

export default Home;
