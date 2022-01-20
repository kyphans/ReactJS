import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onRemove: PropTypes.func,
};

TodoList.defaulProps = {
    todoList: null,
    onRemove: null,
}

function TodoList(props) {

    const { todoList } = props
    const { onRemove } = props

    const handleRomoveTodo = (todo) => {
        onRemove(todo)
    }

    return (
        <ul>
            {todoList.map((todo, index) => (
                <li
                    key={index}
                    onClick={() => handleRomoveTodo(todo)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;