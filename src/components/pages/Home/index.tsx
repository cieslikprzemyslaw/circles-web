import { Typography } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import Highlights from '../Highlights';
import Menu from '../Menu';
import Rooms from '../Rooms'
import useStyles from "./styles";
import { useLittera } from "react-littera";
import translations from "./trans";

function Home() {
  const classes = useStyles();
  const [translated] = useLittera(translations);
  
    useEffect(() => {
      
    }, []);
  
  return(
      <section className={classes.root}>
          <section className={classes.topMenu}>
              {/* top Menu */}
              <Menu/>
              <Typography className={classes.circles} variant="h2" gutterBottom>Circles</Typography>
          </section>
          <main className={classes.mainSection}>
              {/* new conversation and highlights */}
              <Rooms/>
              <Highlights/>
          </main> 
      </section>
  );
}

export default Home;
