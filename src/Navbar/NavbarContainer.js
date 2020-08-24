import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import {
  allToDoAC,
  activeToDoAC,
  completedToDoAC,
} from "../Redux/todo-reducer";

let mapStateToProps = (state) => {
  return {
    toDos: state.toDoList.toDos,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    allToDo: () => {
      dispatch(allToDoAC());
    },
    activeToDo: () => {
      dispatch(activeToDoAC());
    },
    completedToDo: () => {
      dispatch(completedToDoAC());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
