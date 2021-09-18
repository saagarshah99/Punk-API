import React from 'react';
import "./SearchBox.scss";

const SearchBox = ({ handleSearch }) => {
    //TODO: use state in order to update the beer output based on the search
    
    return (
        <div className="search-box">
            <input type="text" className="search-box__input" 
            onInput={handleSearch} placeholder="Search" />
        </div>

        //TODO: Home --> ExploreAlbums (State) --> SearchBox
        //TODO: somehow attach filters to SearchBox
    )
}

export default SearchBox;