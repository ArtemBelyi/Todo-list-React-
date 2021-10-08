import React from 'react';
import ReactDom from 'react-dom';
import AppHeader from './components/AppHeader';
import TodoList from './components/TodoList';
import SearchPanel from './components/SearchPanel';

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    )
}

ReactDom.render(<App/>, document.getElementById('root'))