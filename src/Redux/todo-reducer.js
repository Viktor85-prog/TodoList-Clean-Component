const ALLTODO = "ALL_TO_DO";
const ACTIVETODO = "ACTIVE_TO_DO";
const COMPLETEDTODO = "COMPLETED_TO_DO";
const ADDTODO = "ADD_TO_DO";
const UPDATE_NEW_TODO = "UPDATE_NEW_TODO";
const CLEARTODO = "CLEAR_TO_DO";
const SELECT = "SELECT";
const UNSELECT = "UNSELECT";
const REMOVE = "REMOVE";
const UPDATE_OLD_TODO = "UPDATE_OLD_TODO";
// const UPDATE_TODO = "UPDATE_TODO";
const SETTODOS = "SETTODOS";

let initialState = {
  toDos: [
    {
      id: 0,
      description: "поесть",
      completed: false,
    },
    {
      id: 1,
      description: "попить",
      completed: false,
    },
    {
      id: 2,
      description: "почитать",
      completed: false,
    },
    {
      id: 3,
      description: "поспать",
      completed: false,
    },
    {
      id: 4,
      description: "nothing",
      completed: false,
    },
  ],
  newToDoText: "enything",
  // oldToDoText: "",
};

const toDosReducers = (state = initialState, action) => {
  // let items = state.toDos;
  let items = [state.toDos];
  let activeTasks = items.filter((task) => !task.completed);
  let completedTasks = items.filter((task) => task.completed);
  let finalTasks = [...activeTasks, ...completedTasks];
  switch (action.type) {
    // листалка
    case ALLTODO:
      return {
        items: finalTasks,
        // items: state.toDos,
      };
    case ACTIVETODO:
      return {
        items: activeTasks,
        // items: state.toDos.filter((task) => task.completed === false),
      };
    case COMPLETEDTODO:
      return {
        items: completedTasks,
        // items: state.toDos.filter((task) => task.completed === true),
      };

    //  новый тодо
    case UPDATE_NEW_TODO:
      return {
        ...state,
        newToDoText: action.newText,
      };
    case ADDTODO: {
      let newToDo = {
        id: state.toDos.length,
        description: state.newToDoText,
        completed: false,
      };
      if (state.newToDoText.length != 0) {
        return {
          ...state,
          toDos: [newToDo, ...state.toDos],
          newToDoText: "",
        };
      } else alert("Заполните ToDo");
    }

    case CLEARTODO:
      // alert("Батюшки");
      return {
        ...state,
        newToDoText: "",
      };

    //старые тодо
    case SELECT:
      return {
        ...state,
        toDos: state.toDos.map((t) => {
          if (t.id === action.todoId) {
            return {
              ...t,
              completed: true,
            };
          }
          return t;
        }),
      };
    case UNSELECT:
      return {
        ...state,
        toDos: state.toDos.map((t) => {
          if (t.id === action.todoId) {
            return { ...t, completed: false };
          }
          return t;
        }),
      };
    case REMOVE:
      return {
        ...state,
        toDos: state.toDos.filter((item) => item.id != action.todoId),
      };
    case UPDATE_OLD_TODO:
      return {
        ...state,
        toDos: state.toDos.map((t) => {
          if (t.id === action.id) {
            return {
              ...t,
              description: action.updateText,
            };
          }
          return t;
        }),
      };
    // case UPDATE_TODO:
    //   let updateToDo = {
    //     id: action.id,
    //     description: state.oldToDoText,
    //     completed: false,
    //   };
    //   return {
    //     ...state,
    //     toDos: [updateToDo, ...state.toDos],
    //   };
    // return {
    //   ...state,
    //   toDos: action.updateText,
    // };
    case SETTODOS: {
      return {
        ...state,
        toDos: [...state.toDos, ...action.toDos],
      };
    }

    default:
      return state;
  }
};

//листалка
export const allToDoAC = () => ({ type: ALLTODO });
export const activeToDoAC = () => ({ type: ACTIVETODO });
export const completedToDoAC = () => ({ type: COMPLETEDTODO });

// //криэйторы для нового дела
export const addToDoAC = () => ({ type: ADDTODO });
export const updateNewToDoAC = (text) => ({
  type: UPDATE_NEW_TODO,
  newText: text,
});
export const clearToDoAC = () => ({ type: CLEARTODO });

//криэйторы для существующих дел
export const selectAC = (todoId) => ({ type: SELECT, todoId });
export const unselectAC = (todoId) => ({ type: UNSELECT, todoId });
export const removeAC = (todoId) => ({ type: REMOVE, todoId });
export const setToDosAC = (toDos) => ({ type: SETTODOS, toDos });
export const updateOldToDoAC = (oldText, oldId) => ({
  type: UPDATE_OLD_TODO,
  updateText: oldText,
  id: oldId,
});
// export const updateToDoAC = (oldId) => ({
//   type: UPDATE_TODO,
//   id: oldId,
// });

export default toDosReducers;
