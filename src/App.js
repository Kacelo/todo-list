// import {fontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
// import {faCircleCheck, faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';
function App() {
  return (
    <div>
      <br></br>
      <h2>
        To Do List App
        <TodoList />
      </h2>
      <br></br>
    </div>
      
  );
}

export default App;
