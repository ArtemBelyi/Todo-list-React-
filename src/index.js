import React from 'react';
import ReactDom from 'react-dom';
import AppHeader from './components/AppHeader/AppHeader';
import TodoList from './components/TodoList/TodoList';
import SearchPanel from './components/SearchPanel/SearchPanel';

const App = () => {

    const todoData = [
        {label: 'Drink Coffee 1', important: false, id: 1},
        {label: 'Drink Coffee 2', important: true, id: 2},
        {label: 'Drink Coffee 3', important: false, id: 3}
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