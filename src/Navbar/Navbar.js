import React from "react";

let Navbar = (props) => {
  return (
    <div>
      <div className="navbarContainer">
        <div
          className="navItem"
          onClick={() => {
            props.allToDo();
          }}
        >
          ALL
        </div>
        <div
          className="navItem"
          onClick={() => {
            props.activeToDo();
          }}
        >
          ACTIVE
        </div>
        <div
          className="navItem"
          onClick={() => {
            props.completedToDo();
          }}
        >
          COMPLETED
        </div>
      </div>
    </div>
  );
};
export default Navbar;
