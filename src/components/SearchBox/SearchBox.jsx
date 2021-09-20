import React from 'react';
import "./SearchBox.scss";

// receive search function to update state whenever new input is detected
const SearchBox = ({ handleSearch }) => {
    return (
        <div className="search-box">
            <label htmlFor="search">Search: </label>
            <input type="text" id="search" className="search-box__input" 
            onInput={handleSearch} placeholder="Search &#128269;" />
        </div>
    )
}

export default SearchBox;