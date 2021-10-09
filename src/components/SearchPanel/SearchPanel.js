import React from 'react';
import './SearchPanel.css'
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';

const SearchPanel = () => {
    return (
        <div className="search-panel-container d-flex">
            <input className = "search-panel" placeholder = "search"></input>
            <ItemStatusFilter />
        </div>
    )
}

export default SearchPanel;