import { combineReducers, createStore } from "redux";
import cardsReducer from "./cardsReducer";
import filterReducer from "./filterReducer";

const reducers = combineReducers({ filterData: filterReducer, cardsData: cardsReducer });

let store = createStore(reducers);

export default store