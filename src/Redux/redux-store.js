import { createStore, combineReducers } from "redux";
import toDosReducers from "./todo-reducer";
// import navbarReducers from "../1navbar-reducer";
// import inputReducers from "../1input-reducers";

let reducers = combineReducers({
  toDoList: toDosReducers,
  // navbarPage: navbarReducers,
  // inputPage: inputReducers,
});

let store = createStore(reducers);
// window.store;
// window.store = store;

export default store;
