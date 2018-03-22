import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './pages/Login/login'

import One from './pages/one'
import Two from './pages/two'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
		<Route path="/" exact component={Login}></Route>
		<Route path="/index" exact component={IndexPage}></Route>
        <Route path="/one" exact component={One}></Route>
		<Route path="/two" exact component={Two}></Route>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
