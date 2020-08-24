import React from "react";
import ToDo from "./ToDo";
import { connect } from "react-redux";
import {
  selectAC,
  unselectAC,
  removeAC,
  //   updateToDoAC,
  setToDosAC,
  updateOldToDoAC,
} from "../Redux/todo-reducer";

let mapStateToProps = (state) => {
  console.log(state);
  return {
    items: state.items,
    toDos: state.toDoList.toDos,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    // addToDo: () => {
    //   dispatch(addToDoAC());
    // },
    updateOldToDo: (oldText, oldId) => {
      dispatch(updateOldToDoAC(oldText, oldId));
    },
    // updateToDo: (oldId) => {
    //   dispatch(updateToDoAC(oldId));
    // },
    // clearToDo: () => {
    //   dispatch(clearToDoAC());
    // },
    select: (todoId) => {
      dispatch(selectAC(todoId));
    },
    unselect: (todoId) => {
      dispatch(unselectAC(todoId));
    },
    remove: (todoId) => {
      dispatch(removeAC(todoId));
    },
    setToDos: (toDos) => {
      dispatch(setToDosAC(toDos));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
