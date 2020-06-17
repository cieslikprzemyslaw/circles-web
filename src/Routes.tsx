import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Home, Splash, Intro, Profile } from 'components/pages';

function Routes() {
  
  return (
    <Switch>
      <Route exact path="/"       component={Splash} />
      <Route exact path="/intro"  component={Intro} />
      <Route exact path="/home"   component={Home} />
      <Route exact path="/profile"  component={Profile} />
      <Route exact component={() => <div>Error page</div>} />
    </Switch>
  );
}

export default Routes;
