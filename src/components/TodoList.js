import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };
    const completeTodo = (id) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
    const removeTodo = (id) => {
        const removedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(removedTodos);
    };
    const editTodo = (id, editedtodo) => {
        if (!editedtodo.text || /^\s*$/.test(editedtodo.text)) {
            return;
        }
        const editedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo = editedtodo;
            }
            return todo;
        });
        setTodos(editedTodos);
    };
    return (
        <div>
            <h2 className="suggestion">Write Down the ToDos</h2>
            <TodoForm edit={null} onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                editTodo={editTodo}
            />
        </div>
    );
}

export default TodoList;
