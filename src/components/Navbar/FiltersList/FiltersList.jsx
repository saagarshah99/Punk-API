import React from 'react';
import "./FiltersList.scss";

import FilterItem from "./FilterItem/FilterItem";

const FiltersList = () => {
    return (
        <div>
            <h4>Filters List</h4>

            <FilterItem />
        </div>
    )
}

export default FiltersList;