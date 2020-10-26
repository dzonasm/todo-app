import React from 'react'

import Todo from './todo.component'

const TodoList = ({ todos, toggleTodo }) => (
    <div>
        {
            todos.map(todo => {
                return <Todo key={todo.id} todo={todo.todo} toggleTodo={toggleTodo} isCompleted={todo.isCompleted} id={todo.id} />
            })
        }
    </div>

)

export default TodoList