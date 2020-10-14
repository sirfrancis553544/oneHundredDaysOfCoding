import React from "react";

export default function Todo({ todo, toggleTodo }) {
  function handleTdoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTdoClick}
        />
        {todo.name}
      </label>
    </div>
  );
}
