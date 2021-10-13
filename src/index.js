import React from 'react';
import ReactDom from 'react-dom';
import AppHeader from './components/AppHeader/AppHeader';
import TodoList from './components/TodoList/TodoList';
import SearchPanel from './components/SearchPanel/SearchPanel';
import AddItem from './components/AddItem/AddItem';

class App extends React.Component {

    state = {
        todoData: [this.createTodoItem('Drink Coffee'), 
                this.createTodoItem('Learn React'), 
                this.createTodoItem('Learn JS'), 
                this.createTodoItem('Gaming Star Wars')
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
        const newItem = this.createTodoItem(desc)
        this.setState(({ todoData }) => {
            let newArr = [...todoData, newItem]
            return {
                todoData: newArr
            }
        })
    }
    createTodoItem(label) {
        return {
            label: label,
            important: false,
            done: false,
            id: Math.random() * 10
        }
    }
    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            const index = todoData.findIndex((elem) => elem.id === id)
            const newItem = { ...todoData[index], done: !todoData[index].done}
            const newArr = [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)]

            return {
                todoData: newArr
            }
        })
    }
    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            const index = todoData.findIndex((elem) => elem.id === id)
            const newItem = { ...todoData[index], important: !todoData[index].important}
            const newArr = [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)]

            return {
                todoData: newArr
            }
        })
    }
    render() {

        const doneCount = this.state.todoData.filter((elem) => elem.done).length
        const todoCount = this.state.todoData.length - doneCount

        return (
            <div>
                <AppHeader todo={ todoCount } done={ doneCount }/>
                <SearchPanel />
                <TodoList 
                    todos = { this.state.todoData } 
                    onDeleted={ this.deleteItem }
                    onToggleDone={ this.onToggleDone }
                    onToggleImportant={ this.onToggleImportant }/>
                <AddItem addItem={ this.addNewItem }/>
            </div>
        )
    }
}
ReactDom.render(<App/>, document.getElementById('root'))