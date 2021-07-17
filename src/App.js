import React from 'react';
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';

import Login from './pages/Login/Login';

const App = () => {
  let routes = null;

  routes = (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
  return (
    <Router>
      <main className="container-fluid">{routes}</main>
    </Router>
  );
};

export default App;
