import React from "react";

import Todo from "./Todo";

const TodoList = ({ state, dispatch }) => {
  return (
    <div>
      <h2>ToDo</h2>
      {state.list.map(item => (
        <Todo item={item} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default TodoList;
