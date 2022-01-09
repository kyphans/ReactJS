import React, { useState } from 'react';
import TodoList from './components/TodoList';

TodoApp.propTypes = {

};

function TodoApp(props) {

    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        },
    ]

    const [todoList, setTodoList] = useState(initTodoList)
    const [filteredStatus, setfilteredStatus] = useState('all')

    const handleTodoClick = (todo, index) => {

        // clone current array to the new one
        const newTodoList = [...todoList]

        //toggle state
        const newTodo = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        }

        newTodoList[index] = newTodo
        setTodoList(newTodoList)

    }

    const handelShowAll = () => { setfilteredStatus('all') }
    const handelShowCompleted = () => { setfilteredStatus('completed') }
    const handelShowNew = () => { setfilteredStatus('new') }

    const renderTodoList = todoList.filter(todo => filteredStatus === 'all' || todo.status === filteredStatus)
    console.log(renderTodoList);

    return (
        <div>
            <h3>TODO LIST</h3>
            <TodoList
                onTodoClick={handleTodoClick}
                todoList={renderTodoList}
            />
            <button onClick={handelShowAll}>Show all</button>
            <button onClick={handelShowCompleted}>Show completed</button>
            <button onClick={handelShowNew}>Show new</button>
        </div>
    );
}

export default TodoApp;