import React, { useState } from "react";
import Todo from "./todo";
import TodoForm from "./todoForm";

function TodoList() {
  //createan empty array called todos
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    //merging old state with newly updated state
    //beacuse react wipes everything clean after each render.
    const newTodos = [todo, ...todos];

    // new state values being set
    setTodos(newTodos);
    //old state
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue)=>{
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }

      setTodos(prev => prev.map(item=>(item.id === todoId ? newValue : item)))
  }

  //go through the dos array
  //check through the previous states of the array
  //filter out the object at the selected index or I.D
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  //This method maps the id to the newly create todo states
  //tests if the ids are identical, if so to do is tested
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    //new state of todos is set to completed todo state
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h1>What is your main focus for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos}
       completeTodo={completeTodo} 
       removeTodo={removeTodo}
       updateTodo={updateTodo} />
    </div>
  );
}

export default TodoList;
