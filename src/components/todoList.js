import React, { useEffect, useState } from 'react';
import './todoStyle.css';

function TodoList({ todos, handleDeleteTodo, handleCompleteTodo }) {

    const [pendingCount, setPendingCount] = useState(0);

    useEffect(() => {
        setPendingCount(todos.filter((todo) => {
            return !todo.completed
        }).length);
    }, [todos]);

    return (
        <ul>
            <p style={{fontSize:"30px", textAlign:"center",marginRight:"50px"}}>Pending tasks ({pendingCount})</p>

            {todos.map((todo) => (

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

            ))
            }
        </ul >
    );
}
export default TodoList;