import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {
        return (
            <li>
                <TodoListItem { ...item }/>
            </li>
        )
    })

    console.log(elements)

    return  (
        <ul>
            { elements }
        </ul>
    )
}

export default TodoList;