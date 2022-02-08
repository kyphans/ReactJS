import React, { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import queryString from 'query-string';
import PostFiltersForm from './components/PostFiltersForm';


function TodoListApp(props) {


    const [todoList, setTodoList] = useState([
        { id: 1, title: 'Do homework' },
        { id: 2, title: 'Call my crush' },
        { id: 3, title: 'Play game' },
        { id: 4, title: 'Hang out with friends' },
    ])

    const [postList, setPostList] = useState([])

    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 11,
    })

    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 10,
    })

    useEffect(() => {
        async function fetchPostList() {
            try {
                const parramsString = queryString.stringify(filters)
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${parramsString}`
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                console.log({ responseJSON });
                const { data, pagination } = responseJSON;
                setPostList(data)
                setPagination(pagination)
            }
            catch (error) {
                console.log(error.message);
            }
        }
        fetchPostList()
    }, [filters])

    function handlePageChange(newPage) {
        // console.log(newPage);
        setFilters({
            ...filters,
            _page: newPage,
        })
    }

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

    const handleFilterChange = (newFilters) => {
        console.log('New filters: ', newFilters);
        setFilters({
            ...filters,
            _page: 1,
            title_like: newFilters.searchTerm,
        })
    }

    return (
        <div>
            {/* <TodoForm
                onSubmit={handleSubmit}
            />
            <TodoList
                todoList={todoList}
                onRemove={handleRomoveTodo}
            /> */}
            <PostFiltersForm
                onSubmit={handleFilterChange}
            />
            <PostList
                posts={postList}
            />
            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default TodoListApp;