import React, { useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { Home, Splash, Intro, Profile, Login, Signup, Welcome, Room, Rooms, People, Highlights } from 'components/pages';
import { Button } from '@material-ui/core';
import BottomNav from 'components/common/BottomNav';

const homeSubpages = [ "highlights", "rooms", "people" ];

function Routes() {
  const history = useHistory();
  const location = useLocation();

  // Show BottomNav only when on home screen.
  const bottomNavVisible = new RegExp(homeSubpages.join("|")).test(location.pathname);
  

  useEffect(() => {
    if(location.pathname !== "/") {
      history.push({pathname: "/", state:{ initialPath: location.pathname }});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
        <>
          <Switch>
              <Route exact path="/"       component={Splash} />
              <Route exact path="/intro"  component={Intro} />
              <Route exact path="/signup"  component={Signup} />
              <Route exact path="/welcome"  component={Welcome} />
              <Route exact path="/login"  component={Login} />
              <Route exact path="/home"   component={Home} />
              <Route exact path="/home/highlights" component={Highlights} />
              <Route exact path="/home/rooms"  component={Rooms} />
              <Route exact path="/home/people"  component={People} />
              <Route exact path="/profile"  component={Profile} />
              <Route path="/room/:id"  component={Room} />


              {/* TODO: Move to a file... */}
              <Route exact component={() => <div>Error page <br/> <Button variant="contained" onClick={() => history.push("/")}>Reload</Button></div>} />
          </Switch>
          <BottomNav visible={bottomNavVisible} />
        </>
  );
}

export default Routes;
