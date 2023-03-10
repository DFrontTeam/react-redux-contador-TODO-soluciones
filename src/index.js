import React from 'react';
import { createRoot } from 'react-dom/client';
import { reducers } from './store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';

const store = createStore(reducers);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
