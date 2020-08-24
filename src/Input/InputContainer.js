import React from "react";
import Input from "./Input";
import { connect } from "react-redux";
import { addToDoAC, updateNewToDoAC, clearToDoAC } from "../Redux/todo-reducer";

let mapStateToProps = (state) => {
  return {
    newToDoText: state.toDoList.newToDoText,
    // toDos: state.toDoList.toDos,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addToDo: () => {
      dispatch(addToDoAC());
    },
    updateNewToDo: (text) => {
      dispatch(updateNewToDoAC(text));
    },
    clearToDo: () => {
      dispatch(clearToDoAC());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
