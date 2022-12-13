import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { initialize as headerIni, reducer as headerReducer } from "./header";
import { initialize as registIni, reducer as registReducer } from "./regist";

import { initialize as userIni, reducer as userReducer } from "./user";

import { initialize as reportIni, reducer as reportReduce, header: headerReducerr } from "./support";
const store = createStore(
  combineReducers({ regist: registReducer, reportReducer ,user: userReducer}),
  { regist: registIni, report: reportIni , header: headerIni, user: userIni},

  composeWithDevTools()
);

export default store;
