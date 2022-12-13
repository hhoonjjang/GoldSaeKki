import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { initialize as headerIni, reducer as headerReducer } from "./header";
import { initialize as registIni, reducer as registReducer } from "./regist";

import { initialize as userIni, reducer as userReducer } from "./user";

import { initialize as reportIni, reducer as reportReducer } from "./support";
const store = createStore(
  combineReducers({
    regist: registReducer,
    report: reportReducer,
    user: userReducer,
    header: headerReducer,
  }),
  { regist: registIni, report: reportIni, header: headerIni, user: userIni },

  composeWithDevTools()
);

export default store;
