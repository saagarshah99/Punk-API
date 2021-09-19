import React from 'react';
import "./FiltersList.scss";

import FilterItem from "./FilterItem/FilterItem";

//defining array containing items and passing into another component to output them
const FiltersList = ({ handleFilter }) => {
    const items = [
        // ["All", "All"],
        ["High ABV (> 6.0%)", "ABV"],
        ["Classic Range", "Classic"],
        ["Acidic (ph < 4)", "Acidic"],
    ]
    
    return (
        <div className="filter-list">
            <FilterItem handleFilter={handleFilter} items={items} />
        </div>
    )
}

export default FiltersList;