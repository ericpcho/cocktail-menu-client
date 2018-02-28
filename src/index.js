import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import App from "./app.js";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers/reducer.js";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
