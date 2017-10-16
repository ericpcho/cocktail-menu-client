import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import Page from './components/page/page';
import {createStore, applyMiddleware} from 'redux';
import {combinedReducer} from './reducers/combinedReducer.js';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(combinedReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
