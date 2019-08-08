
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import {
  AsyncPageDefault,
  AsyncPageOther
} from './AsyncComponents';

const AppRoutes = () =>
    <Switch>
      <Route exact path='/' component={AsyncPageDefault} />
      <Route path='/other' component={AsyncPageOther} />
    </Switch>

export default AppRoutes;
