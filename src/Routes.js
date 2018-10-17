import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Crimemap from './components/Crimemap/Crimemap';
import Sharedmap from './components/Sharedmap/Sharedmap';

// import Profile from './components/auth/Profile';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Crimemap} />

      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/crimemap" component={Crimemap} />
      <Route exact path="/sharedmap" component={Sharedmap} />

      {/* <Route path="/profile" component={Profile} /> */}
    </Switch>
  );
};

export default Routes;