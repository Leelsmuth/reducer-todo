export const ADD_TODO = "ADD_TODO";
export const TOGGLE_LIST = "TOGGLE_LIST";
export const UPDATE_LIST = "UPDATE_LIST";

export const initialState = {
  list: [
    {
      item: "Learn reducers",
      completed: false,
      id: 38929
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newItem = {
        item: action.payload,
        id: Date.now(),
        completed: false
      };
      return {
        ...state,
        list: [...state.list, newItem]
      };
    case "TOGGLE_LIST":
      return {
        ...state,
        list: state.list.map(item => {
          if (action.payload === item.id) {
            return {
              ...item,
              completed: !item.completed
            };
          }
          return item;
        })
      };
    case "UPDATE_LIST":
      return {
        ...state,
        list: state.list.filter(item => !item.completed)
      };
    default:
      return state;
  }
};
