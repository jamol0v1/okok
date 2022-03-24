import TodoList from "./Todo/TodoList";
import React from "react";
import './App.css';
import Context from './context';
import AddTodo from "./Todo/AddTodo";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, complated: false, title: 'Buy bread' },
    { id: 2, complated: false, title: 'Buy oil' },
    { id: 3, complated: false, title: 'Buy milk' }
  ])

  function toggleTodo(id) {
    setTodos(todos.map(todo => {  
      if (todo.id === id) {
        todo.complated = !todo.complated
      }
      return todo
    })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }


  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React tutorial</h1>
        <AddTodo onCreate={ addTodo } />
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>No todo!</p>}

      </div>
    </Context.Provider>
  )
}

export default App;