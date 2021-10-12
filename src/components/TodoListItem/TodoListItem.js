import React from 'react';
import './TodoListItem.css'

export default class TodolistItem extends React.Component {

    state = { done: false, important: false}

    onLabelClick = () => {
        this.setState((state) => {
            return {
                done: !state.done
            }
        })
    }
    onImportantClick = () => {
        this.setState((state) => {
            return {
                important: !state.important
            }
        })
    }
    render() {
        const { label, onDeleted } = this.props
        let className = 'todo-list-item d-flex'

        if(this.state.done) className += ' done'
        if(this.state.important) className += ' important'
        
        return (
            <span className={ className }>
                <span className="todo-list-item-label" onClick={ this.onLabelClick }>{ label }</span>
                <button type="button" className="btn btn-outline-success btn-sm todo-list-item__button" onClick={ this.onImportantClick }><i className="bi bi-exclamation-octagon"></i></button>
                <button type="button" className="btn btn-outline-danger btn-sm todo-list-item__button" onClick={ onDeleted }><i className="bi bi-cart-x"></i></button>
            </span>
        )
    }
}