import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import bitcoinReducer from "./bitcoinReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  bitcoin: bitcoinReducer
});

export default allReducers;
