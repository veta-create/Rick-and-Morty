import { applyMiddleware, combineReducers, createStore } from "redux";
import cardsReducer from "./cardsReducer";
import filterReducer from "./filterReducer";
import paginationReducer from "./paginationReducer";
import thunkMiddleWare from "redux-thunk";

const reducers = combineReducers({
  filterData: filterReducer,
  cardsData: cardsReducer,
  paginationData: paginationReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
