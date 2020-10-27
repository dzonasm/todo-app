import './App.scss';
import TodoList from './components/todo-list.component'
import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

import './App.scss'

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
      <h1 className='header'>PLAN YOUR DAY</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <div className='form'>
        <input type='text' ref={todoNameRef} autoComplete='off' required={true} />
        <label className='label-name'>
          <span className='content-name'>Todo</span>
        </label>
      </div>
      <div className='button-container'>
        <button className='button' onClick={addTodo}>Add todo</button>
        <button className='button' onClick={clearTodos}>Clear Todos</button>
      </div>
      <p className="left-todos">{todos.filter(todo => !todo.isCompleted).length} left</p>
    </div>
  );
}

export default App;
