import React from 'react';
import './TodoListItem.css'

export default class TodolistItem extends React.Component {

    state = { value: 'dron'}

    render() {
        const { label, onDeleted, onToggleDone, onToggleImportant, important, done } = this.props
        let className = 'todo-list-item d-flex'

        if(done) className += ' done'
        if(important) className += ' important'
        
        return (
            <span className={ className }>
                <span className="todo-list-item-label" onClick={ onToggleDone }>{ label }</span>
                <button type="button" className="btn btn-outline-success btn-sm todo-list-item__button" onClick={ onToggleImportant }><i className="bi bi-exclamation-octagon"></i></button>
                <button type="button" className="btn btn-outline-danger btn-sm todo-list-item__button" onClick={ onDeleted }><i className="bi bi-cart-x"></i></button>
            </span>
        )
    }
}