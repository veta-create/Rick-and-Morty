import { combineReducers, createStore } from "redux";
import cardsReducer from "./cardsReducer";
import filterReducer from "./filterReducer";
import paginationReducer from "./paginationReducer";

const reducers = combineReducers({
  filterData: filterReducer,
  cardsData: cardsReducer,
  paginationData: paginationReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
