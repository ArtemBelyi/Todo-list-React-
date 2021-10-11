import React from 'react';
import './TodoListItem.css'

export default class TodolistItem extends React.Component {
    render() {
        const { label, important = false } = this.props
        const style = {
            color: important ? "steelblue" : "black"
        }
        return (
            <span className="todo-list-item d-flex">
                <span className="todo-list-item-label" style = { style }>{ label }</span>
                <button type="button" className="btn btn-outline-success btn-sm todo-list-item__button"><i className="bi bi-exclamation-octagon"></i></button>
                <button type="button" className="btn btn-outline-danger btn-sm todo-list-item__button"><i className="bi bi-cart-x"></i></button>
            </span>
        )
    }
}