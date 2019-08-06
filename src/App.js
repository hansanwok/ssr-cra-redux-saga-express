import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import PageDefault from 'containers/PageDefault';
import PageOther from 'containers/PageOther';

const App = () =>
  <Router>
    <Switch>
      <Route exact path='/' component={PageDefault} />
      <Route path='/other' component={PageOther} />
    </Switch>
  </Router>

export default App;
