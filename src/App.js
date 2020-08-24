import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
// import ToDoApp from "./ToDoApp";
// import ToDo from "./ToDo/ToDo";
import NavbarContainer from "./Navbar/NavbarContainer";
import ToDoContainer from "./ToDo/ToDoContainer";
import InputContainer from "./Input/InputContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <NavbarContainer />
      <hr />
      <InputContainer />
      <hr />
      <ToDoContainer />
    </div>
  );
}

export default App;
