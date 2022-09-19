import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import NewTodoForm from "../NewTodoForm/NewTodoForm.js"
import './TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const deleteTodo = (id) => {
        const copy = [...todos];
        setTodos(copy.filter(todo => todo.id !== id))
    }

    const renderTodos = () => {
        return (
            <ul className="TodoList-List">
                {todos.map(todo => (
                    <div className="TodoList-Todo" key={todo.id}>
                        <button className="TodoList-x" onClick={evt => deleteTodo(todo.id)}>x</button>
                        <p className="TodoList-Text">{todo.todoText}</p>
                    </div>

                ))}
            </ul>
        )
    }

    /** Add new todo object to list */
    const addTodo = todo => {
        let newTodo = { ...todo, id: uuid() };
        setTodos(todos => [...todos, newTodo]);
    }

    return (
        <div className="TodoList">
            <NewTodoForm addTodo={addTodo} />
            {renderTodos()}
        </div>
    )
}

export default TodoList;