import React from "react";

let ToDo = (props) => {
  //   if (props.toDos.length === 0) {
  //     props.setToDos([
  //       {
  //         id: 0,
  //         description: "поесть",
  //         completed: false,
  //       },
  //       {
  //         id: 1,
  //         description: "попить",
  //         completed: false,
  //       },
  //       {
  //         id: 2,
  //         description: "почитать",
  //         completed: false,
  //       },
  //       {
  //         id: 3,
  //         description: "поспать",
  //         completed: false,
  //       },
  //       {
  //         id: 4,
  //         description: "nothing",
  //         completed: false,
  //       },
  //     ]);
  //   }
  //   console.log("todo");
  // console.log(props.toDos);

  const resolvedClass = {
    textDecoration: "line-through",
  };

  let onToDoChange = (e) => {
    let oldText = e.target.value;
    let oldId = +e.target.id;
    // console.log(oldId);
    props.updateOldToDo(oldText, oldId);
  };
  debugger;
  return (
    <div>
      {props.items.map((t) => (
        <div key={t.id} className="container">
          <div>
            {t.completed ? (
              <button
                onClick={() => {
                  props.unselect(t.id);
                }}
              >
                complete
              </button>
            ) : (
              <button
                onClick={() => {
                  props.select(t.id);
                }}
              >
                active
              </button>
            )}
          </div>
          <div className="description">
            <textarea
              className="input"
              onChange={onToDoChange}
              id={t.id}
              value={t.description}
              style={t.completed === true ? resolvedClass : {}}
            />
          </div>
          <div>
            <button
              id={t.id}
              onClick={() => {
                props.remove(t.id);
              }}
            >
              remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToDo;
