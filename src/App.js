import React from "react";
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

import Login from "./login/pages/Login";
import Dashboard from "./dashboard/pages/Dashboard";
import Sell from "./dashboard/pages/Sell";
import UserMenu from "./shared/components/UIElements/UserMenu";

const App = () => {
  let routes = null;

  routes = (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/sell">
        <Sell />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
  return (
    <Router>
      <UserMenu />
      <main className="container-fluid">{routes}</main>
    </Router>
  );
};

export default App;
