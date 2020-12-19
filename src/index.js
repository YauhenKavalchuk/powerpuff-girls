import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { App } from './App';
import { HomePage } from './pages/home-page';
import { DetailPage } from './pages/detail-page';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/detail-page" component={DetailPage} />
        </Switch>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
