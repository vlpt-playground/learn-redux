import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import RootStore from './stores';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = new RootStore();

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
