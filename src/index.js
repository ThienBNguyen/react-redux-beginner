import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { createStore } from "redux";
// import allReducer from "../src/reducers/index";
import { Provider } from "react-redux";
import store from "./Store";
// const store = createStore(
//   allReducer /* preloadedState, */,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
