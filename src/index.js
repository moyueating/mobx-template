import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";
import Routes from './routes';
import './index.scss';
import './utils/axiosMiddleware';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import store from './store';

ReactDOM.render(
  <Provider appStore={store}>
    <Router basename="/">
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
