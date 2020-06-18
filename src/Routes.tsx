import React, { useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { Home, Splash, Intro, Profile, Login, Signup, Welcome } from 'components/pages';
import { useStore } from 'store/hooks';
import { Button } from '@material-ui/core';

const allowPaths = (path: string, ...paths: string[]) => {
  return !!paths.find(p => path === p);
}

function Routes() {
  const history = useHistory();
  const location = useLocation();
  const currentAccount = useStore(state => state.currentAccount);

  useEffect(() => {
    if(!currentAccount && !allowPaths(location.pathname, "/", "/intro", "/login", "/signup")) {
      history.push("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, currentAccount]);
  
  return (
    <Switch>
      <Route exact path="/"       component={Splash} />
      <Route exact path="/intro"  component={Intro} />
      <Route exact path="/signup"  component={Signup} />
      <Route exact path="/welcome"  component={Welcome} />
      <Route exact path="/login"  component={Login} />
      <Route exact path="/home"   component={Home} />
      <Route exact path="/profile"  component={Profile} />
      {/* TODO: Move to a file... */}
      <Route exact component={() => <div>Error page <br/> <Button onClick={() => history.push("/")}>Reload</Button></div>} />
    </Switch>
  );
}

export default Routes;
