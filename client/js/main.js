import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import configureStore from './middleware/store';

import '../styles/scss/main.scss';

ReactDOM.render(
  (
    <Provider store={configureStore()} >
      <App />
    </Provider>
  ),
  document.getElementById('appContainer')
);
