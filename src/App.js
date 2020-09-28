import React from "react";
import { Redirect, Route, Switch, HashRouter } from "react-router-dom";

import Login from "./login/pages/Login";
import Dashboard from "./dashboard/pages/Dashboard";

const App = () => {
  let routes = null;

  routes = (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Redirect to="/" component={Login} />
    </Switch>
  );
  return (
    <HashRouter>
      <main className="container-fluid">{routes}</main>
    </HashRouter>
  );
};

export default App;
