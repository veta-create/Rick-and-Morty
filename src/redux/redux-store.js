import { combineReducers, createStore } from "redux";
import cardsReducer from "./cardsReducer";
import filterReducer from "./filterReducer";

const reducers = combineReducers({ filterData: filterReducer, cardsData: cardsReducer });

let store = createStore(reducers);

window.store = store

export default store