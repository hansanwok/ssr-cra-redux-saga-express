import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureStore } from './store/configureStore';
import AppRoutes from './routes';

const App =
  <Provider store={configureStore()}>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>

export default App;
