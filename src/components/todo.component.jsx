import React from 'react'

import './todo.scss'

function Todo({ todo, isCompleted, toggleTodo, id }) {
    function handleTodoClick() {
        toggleTodo(id)
    }


    return (
        <div className='todo-container'>
            <label className="label">
                <input className='checkbox' type='checkbox' checked={isCompleted} onChange={handleTodoClick} />
                {todo}
            </label>
        </div>
    )
}


export default Todo