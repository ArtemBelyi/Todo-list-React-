import React from 'react';
import ReactDom from 'react-dom';
import AppHeader from './components/AppHeader';
import TodoList from './components/TodoList';
import SearchPanel from './components/SearchPanel';

const App = () => {

    const todoData = [
        {label: 'Drink Coffee 1', important: false},
        {label: 'Drink Coffee 2', important: true},
        {label: 'Drink Coffee 3', important: false}
    ]
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos = { todoData }/>
        </div>
    )
}

ReactDom.render(<App/>, document.getElementById('root'))