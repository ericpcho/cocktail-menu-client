import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import Page from './components/page/page';
import {creatStore, applyMiddleware} from 'redux';
// import {combinedReducer} from './reducers/index.js';

import registerServiceWorker from './registerServiceWorker';

// const store = createStore(combinedReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Page />, 
  document.getElementById('root')
);

registerServiceWorker();
