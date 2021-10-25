import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import { EntryListPage } from './pages';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/entries" />
      </Route>
      <Route path='/entries'>
        <EntryListPage />
      </Route>
    </Switch>
  )
}

export default Routes;