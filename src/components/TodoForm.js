import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const handleChange = (e) => {
        setInput(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: uuidv4(),
            text: input,
            isComplete: false,
        });
        setInput('');
    };
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                tupe="text"
                placeholder="Add a Todo"
                value={input}
                name="text"
                className="todo-input"
                onChange={handleChange}
            />
            <input
                type="submit"
                value={props.edit ? 'Update todo' : 'Add todo'}
                className="todo-button"
            ></input>
            {props.edit ? (
                <button className="cancel-button" onClick={props.cancelSubmit}>
                    cancel
                </button>
            ) : (
                ''
            )}
        </form>
    );
}

export default TodoForm;
