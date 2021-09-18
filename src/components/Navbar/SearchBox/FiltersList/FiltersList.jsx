import React from 'react';
import "./FiltersList.scss";

import FilterItem from "./FilterItem/FilterItem";

const FiltersList = () => {
    return (
        <div className="filter-list">
            <FilterItem items={["High ABV (>6.0%)", "Classic Range", "Acidic (ph < 4)"]} />
        </div>
    )
}

export default FiltersList;