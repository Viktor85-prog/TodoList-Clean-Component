import React from "react";

let Input = (props) => {
  let onNewToDoChange = (e) => {
    let text = e.target.value;
    props.updateNewToDo(text);
  };
  //   console.log("input");
  //   console.log(props);
  return (
    <div className="container">
      <button
        onClick={() => {
          props.addToDo();
        }}
      >
        ADD
      </button>
      <div>
        <input
          className="input"
          value={props.newToDoText}
          onChange={onNewToDoChange}
          placeholder="сюда жиши"
        />
      </div>
      <button
        onClick={() => {
          props.clearToDo();
        }}
      >
        CLEAR
      </button>
    </div>
  );
};
export default Input;
