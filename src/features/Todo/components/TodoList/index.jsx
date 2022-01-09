import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
}

function TodoList(props) {

    const { todoList } = props
    const { onTodoClick } = props

    const handelTodoClick = (todo, index) => {
        if (!onTodoClick) return;
        onTodoClick(todo, index);
    }

    // console.log(todoList);

    return (
        <div>
            <div>
                <input placeholder='Enter text' />
                <button>Submit</button>
            </div>

            <ul className='todo-list'>
                {todoList.map((todo, index) => (
                    <li
                        className={classnames({
                            'todo-item': true,
                            completed: todo.status === 'completed'
                        })}
                        key={todo.id}
                        onClick={() => handelTodoClick(todo, index)}
                    >
                        {todo.title}
                    </li>
                ))}

            </ul>
        </div>
    );
}

export default TodoList;