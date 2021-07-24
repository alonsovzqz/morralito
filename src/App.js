import React from 'react';
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Setup from './pages/Setup/Setup';

const App = () => {
  let routes = null;

  routes = (
    <Switch>
      <Route path="/" exact>
        <Setup />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
  return (
    <Router>
      <Container className="app" fluid>
        {routes}
      </Container>
    </Router>
  );
};

export default App;
