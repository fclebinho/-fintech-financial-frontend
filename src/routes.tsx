import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import EntryList from './pages/entry/list';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/entries" />
      </Route>
      <Route path='/entries'>
        <EntryList />
      </Route>
    </Switch>
  )
}

export default Routes;