import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { initialize as registIni, reducer as registReducer } from "./regist";
const store = createStore(
  combineReducers({ regist: registReducer }),
  { regist: registIni },
  composeWithDevTools()
);

export default store;
