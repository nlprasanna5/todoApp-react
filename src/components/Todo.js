import React, { useState } from 'react';
import TodoForm from './Input.js';
import TodoList from './todoList';
import './todoStyle.css';


function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            setTodos([
                ...todos,
                { id: new Date().getTime(), title: inputValue, completed: false },
            ]);
            setInputValue("");
        }
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleCompleteTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: true } : todo
            )
        );
    };

    return (
        <div className="todo-container">
            <div className="main-container">
                <h2>Todo List</h2>
                <TodoList
                    todos={todos}
                    handleDeleteTodo={handleDeleteTodo}
                    handleCompleteTodo={handleCompleteTodo}
                />
                <TodoForm
                    inputValue={inputValue}
                    handleInputChange={handleInputChange}
                    handleAddTodo={handleAddTodo}
                />
            </div>
        </div>
    );
}

export default TodoApp;
