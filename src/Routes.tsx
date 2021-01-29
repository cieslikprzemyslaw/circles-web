import React, { Suspense, useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import BottomNav from 'components/common/BottomNav';

const homeSubpages = [ "highlights", "rooms", "people" ];

const HomeLazy = React.lazy(() => import("components/pages/Home/"))
const LoginLazy = React.lazy(() => import("components/pages/Login/"))
const IntroLazy = React.lazy(() => import("components/pages/Intro/"))
const SplashLazy = React.lazy(() => import("components/pages/Splash/"))
const WelcomeLazy = React.lazy(() => import("components/pages/Welcome/"))
const SignupLazy = React.lazy(() => import("components/pages/Signup/"))

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
      <Suspense fallback={<div>Loading...</div>}>
      <Switch>
          <Route exact path="/" component={SplashLazy} />
          <Route exact path="/intro" component={IntroLazy} />
          <Route exact path="/signup" component={SignupLazy} />
          <Route exact path="/welcome" component={WelcomeLazy} />
          <Route exact path="/login" component={LoginLazy} />
          <Route path="/home" component={HomeLazy} />

          {/* TODO: Move to a file... */}
          <Route exact component={() => <div>Error page <br/> <Button variant="contained" onClick={() => history.push("/")}>Reload</Button></div>} />
      </Switch>
      </Suspense>
    <BottomNav visible={bottomNavVisible} />
  </>
  );
}

export default Routes;
