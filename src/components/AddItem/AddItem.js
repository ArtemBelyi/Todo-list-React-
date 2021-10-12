import React from 'react';

const AddItem = ({ addItem }) => {
    return (
        <div className = "add-item d-grid gap-2">
            <button className="add-item__button btn btn-primary" type="button" onClick={ addItem }>Add Task</button>
        </div>
    )
}

export default AddItem