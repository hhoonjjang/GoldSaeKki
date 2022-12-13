import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { initialize as registIni, reducer as registReducer } from "./regist";
import { initialize as userIni, reducer as userReducer } from "./user";
const store = createStore(
  combineReducers({ regist: registReducer, user: userReducer }),
  { regist: registIni, user: userIni },
  composeWithDevTools()
);

export default store;
