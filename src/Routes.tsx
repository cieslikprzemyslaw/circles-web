import React, { useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { Home, Splash, Intro, Profile, Login, Signup, Welcome, Room } from 'components/pages';
import { Button } from '@material-ui/core';

function Routes() {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if(location.pathname !== "/") {
      history.push({pathname: "/", state:{ initialPath: location.pathname }});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Switch>
      <Route exact path="/"       component={Splash} />
      <Route exact path="/intro"  component={Intro} />
      <Route exact path="/signup"  component={Signup} />
      <Route exact path="/welcome"  component={Welcome} />
      <Route exact path="/login"  component={Login} />
      <Route exact path="/home"   component={Home} />
      <Route exact path="/profile"  component={Profile} />
      <Route path="/room/:id"  component={Room} />
      {/* TODO: Move to a file... */}
      <Route exact component={() => <div>Error page <br/> <Button variant="contained" onClick={() => history.push("/")}>Reload</Button></div>} />
    </Switch>
  );
}

export default Routes;
