import React, { useState } from "react";
import { ADD_TODO, UPDATE_LIST } from "../reducers/reducers";

const TodoForm = ({ dispatch }) => {
  const [newItem, setNewItem] = useState();

  const submitTask = event => {
    event.preventDefault();
    setNewItem("");
  };

  const handleChange = event => {
    setNewItem(event.target.value);
  };

  return (
    <>
      <form onSubmit={submitTask}>
        <input
          type="text"
          value={newItem}
          name="item"
          onChange={handleChange}
        />
        <button onClick={() => dispatch({ type: ADD_TODO, payload: newItem })}>
          Add
        </button>
      </form>
      <button onClick={() => dispatch({ type: UPDATE_LIST })}>
        Clear Completed
      </button>
    </>
  );
};

export default TodoForm;
