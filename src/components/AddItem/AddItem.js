import React from 'react';


export default class AddItem extends React.Component {

    state = { label: ''}

    onLabelChange = (event) => {
        this.setState({label: event.target.value})
    }
    onSubmit = (event) => {
        event.preventDefault()
        this.props.addItem(this.state.label)
        this.removeInput()
        
    }
    removeInput() {
        this.setState({label: ''})
    }

    render() {
        return (
            <form className = "add-item d-grid gap-2" onSubmit={ this.onSubmit }>
                <input className="form-control" type="text" placeholder="Write new task" aria-label="default input example" onChange={ this.onLabelChange } value={this.state.label}></input>
                <button className="add-item__button btn btn-primary" type="button">Add Task</button>
            </form>
        )
    }
}