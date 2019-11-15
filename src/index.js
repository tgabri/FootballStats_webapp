import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const app = (
  // <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
