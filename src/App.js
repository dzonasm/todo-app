import './App.css';
import TodoList from './components/todo-list.component'
import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

import './App.css'

const LOCAL_STORAGE_KEY = 'todoApp.todos'


function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])


  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.isCompleted = !todo.isCompleted
    setTodos(newTodos)
  }

  const addTodo = (e) => {
    const name = todoNameRef.current.value
    if (name === '') return
    console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuid(), todo: name, isCompleted: false }]
    })
    todoNameRef.current.value = ''
  }

  const clearTodos = () => {
    const filteredTodos = todos.filter(todo => todo.isCompleted === false)
    setTodos(filteredTodos)
  }

  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type='text' ref={todoNameRef} />
      <div className='button-container'>
        <button onClick={addTodo}>Add todo</button>
        <button onClick={clearTodos}>Clear Todos</button>
      </div>
      <p className="left-todos">{todos.filter(todo => !todo.isCompleted).length} left</p>
    </div>
  );
}

export default App;
