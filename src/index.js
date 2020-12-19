import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import { App } from './App';
import { HomePage } from './pages/home-page';
import { DetailPage } from './pages/detail-page';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shows/:id" component={DetailPage} />
          </Switch>
        </App>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
