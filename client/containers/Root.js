import React  from 'react';
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";

import Recipe from '../pages/Recipe';
import Index from '../pages/Index';
import Search from '../pages/Search';

export default ({ history, store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/recipe" component={Recipe}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/" component={Index}/>
      </Switch>
    </Router>
  </Provider>
);