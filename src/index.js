import React from 'react';
import ReactDom from 'react-dom';
import AppHeader from './components/AppHeader/AppHeader';
import TodoList from './components/TodoList/TodoList';
import SearchPanel from './components/SearchPanel/SearchPanel';
import AddItem from './components/AddItem/AddItem';

class App extends React.Component {

    state = {
        todoData: [
            {label: 'Drink Coffee 1', important: false, id: 1},
            {label: 'Drink Coffee 2', important: true, id: 2},
            {label: 'Drink Coffee 3', important: false, id: 3}
        ]
    }
    deleteItem = (id) => {
        this.setState(({ todoData }) => {
        
            const index = todoData.findIndex((elem) => elem.id === id)
            const newArr = [...todoData.slice(0, index), ...todoData.slice(index + 1)]

            return {
                todoData: newArr
            }
        })
    }
    addNewItem = (desc) => {
        const newItem = {label: 'desc', important: false, id: Math.random() * 10}
        this.setState(({ todoData }) => {
            let newArr = [...todoData, newItem]
            return {
                todoData: newArr
            }
        })
    }
    render() {
        return (
            <div>
                <AppHeader />
                <SearchPanel />
                <TodoList todos = { this.state.todoData } onDeleted={ this.deleteItem }/>
                <AddItem addItem={ this.addNewItem }/>
            </div>
        )
    }
}
ReactDom.render(<App/>, document.getElementById('root'))