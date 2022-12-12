import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { initialize as registIni, reducer as registReducer } from "./regist";
import { initialize as headerIni, reducer as headerReducer } from "./header";
const store = createStore(
  combineReducers({ regist: registReducer, header: headerReducer }),
  { regist: registIni, header: headerIni },
  composeWithDevTools()
);

export default store;
