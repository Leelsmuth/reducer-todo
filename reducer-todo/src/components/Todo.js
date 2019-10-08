import React from "react";
import { TOGGLE_LIST } from "../reducers/reducers";

const Todo = ({ item, dispatch }) => {
  return (
    <div
      className={item.completed ? "completed" : ""}
      onClick={() => dispatch({ type: TOGGLE_LIST, payload: item.id })}
    >
      <p>{item.item}</p>
    </div>
  );
};

export default Todo;
