import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Content from './Content';
import CustomCounterPage from './CustomCounterPage';
import NotFoundPage from './NotFoundPage';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/custom-counter" component={CustomCounterPage} />
        <Route path="/" exact component={Content} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
