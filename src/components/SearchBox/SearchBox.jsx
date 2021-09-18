import React from 'react';
import "./SearchBox.scss";

// receive search function to update state whenever new input is detected
const SearchBox = ({ handleSearch }) => {
    return (
        <div className="search-box">
            <input type="text" className="search-box__input" 
            onInput={handleSearch} placeholder="Search" />
        </div>
    )
}

export default SearchBox;