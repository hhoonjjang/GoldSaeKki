import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { initialize as registIni, reducer as registReducer } from "./regist";
import { initialize as reportIni, reducer as reportReducer } from "./support";
const store = createStore(
  combineReducers({ regist: registReducer, reportReducer }),
  { regist: registIni, report: reportIni },
  composeWithDevTools()
);

export default store;
