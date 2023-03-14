import React from 'react';
import './todoStyle.css';
function TodoList({ todos, handleDeleteTodo, handleCompleteTodo }) {
    return (
        <ul>
            <p>Pending tasks ({todos.filter((todo) => !todo.completed).length})</p>
            {todos.map((todo) => (
                // <div className="list-container">

                    <li key={todo.id} className="lists">
                        <div>
                            <span
                                className="text"
                                style={{ textDecoration: todo.completed ? "line-through" : "" }}
                            >
                                {todo.title}
                            </span>
                        </div>

                        <div className="buttons">
                            <button onClick={() => handleCompleteTodo(todo.id)} className="complete">
                                Complete
                            </button>
                            <button onClick={() => handleDeleteTodo(todo.id)} className="delete">
                                Delete
                            </button>
                        </div>
                    </li>
                // </div>
            ))
            }
        </ul >
    );
}
export default TodoList;