import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({ todos, completeTodo, removeTodo, editTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });

    const editSubmit = (value) => {
        editTodo(edit.id, value);
        setEdit({
            id: null,
            value: '',
        });
    };
    const cancelSubmit = () => {
        setEdit({
            id: null,
            value: '',
        });
    };
    return todos.map((todo, index) => {
        if (edit.id === todo.id) {
            return (
                <div className="todo-item" key={index}>
                    <TodoForm
                        edit={edit}
                        onSubmit={editSubmit}
                        cancelSubmit={cancelSubmit}
                    />
                </div>
            );
        } else {
            return (
                <div className="todo-item" key={index}>
                    <input
                        type="checkbox"
                        onClick={() => completeTodo(todo.id)}
                        checked={todo.isComplete}
                    ></input>
                    {todo.isComplete ? (
                        <div className="item-content">
                            <div>
                                <s>{todo.text}</s>
                            </div>
                            <div className="icons">
                                <RiCloseCircleLine
                                    onClick={() => removeTodo(todo.id)}
                                    className="delete-icon"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="item-content">
                            <div>{todo.text}</div>
                            <div className="icons">
                                <RiCloseCircleLine
                                    onClick={() => removeTodo(todo.id)}
                                    className="delete-icon"
                                />
                                <TiEdit
                                    onClick={() =>
                                        setEdit({
                                            id: todo.id,
                                            value: todo.text,
                                        })
                                    }
                                    className="edit-icon"
                                />
                            </div>
                        </div>
                    )}
                </div>
            );
        }
    });
}

export default Todo;
