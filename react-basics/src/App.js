import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodo] = useState([]);
  const todoNameRef = useRef();

  //* calls local storage to load once
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodo(storedTodos);
  }, []);

  // * creates local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  //* activate the check function 
  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodo(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return console.log(name);
    setTodo((prevTodo) => {
      return [...prevTodo, { id: uuidv4(), name: name, complete: false }];
    });
    // *clears search bar after submitting
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodo(newTodos)
}

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed</button>
      <div>{todos.filter(todo=> !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
