import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { initialize as userDBini, reducer as userDBReducer } from "./userDB";

const store = createStore((state) => state, {}, composeWithDevTools());

export default store;
