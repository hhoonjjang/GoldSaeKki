import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore((state) => state, {}, composeWithDevTools());

export default store;
