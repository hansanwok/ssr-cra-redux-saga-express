
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import {
  AsyncPageDefault,
  AsyncPageOther
} from './AsyncComponents';

const AppRouter = () =>
    <Switch>
      <Route exact path='/' component={AsyncPageDefault} />
      <Route path='/other' component={AsyncPageOther} />
    </Switch>

export default AppRouter;
