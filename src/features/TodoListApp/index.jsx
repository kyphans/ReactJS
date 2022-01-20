import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function TodoListApp(props) {


    const [todoList, setTodoList] = useState([
        { id: 1, title: 'Do homework' },
        { id: 2, title: 'Call my crush' },
        { id: 3, title: 'Play game' },
        { id: 4, title: 'Hang out with friends' },
    ])



    const handleRomoveTodo = (todo) => {
        // console.log(todoList);
        const index = todoList.findIndex((x) => (x.id === todo.id))
        console.log(index);
        if (index < 0) return;

        const newTodoList = [...todoList]
        console.log(newTodoList);
        newTodoList.splice(index, 1)
        setTodoList(newTodoList)
    }

    const handleSubmit = (formValue) => {
        console.log(formValue)

        const newTodo = {
            id: todoList.length + 1,
            ...formValue,
        }
        const newTodoList = [...todoList]
        newTodoList.push(newTodo)
        setTodoList(newTodoList)
    }

    return (
        <div>
            <TodoForm
                onSubmit={handleSubmit}
            />
            <TodoList
                todoList={todoList}
                onRemove={handleRomoveTodo}
            />
        </div>
    );
}

export default TodoListApp;