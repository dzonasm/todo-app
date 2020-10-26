import React from 'react'

function Todo({ todo, isCompleted, toggleTodo, id }) {
    function handleTodoClick() {
        toggleTodo(id)
    }


    return (
        <div>
            <label>
                <input type='checkbox' checked={isCompleted} onChange={handleTodoClick} />
                {todo}
            </label>
        </div>
    )
}


export default Todo