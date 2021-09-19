import React from 'react';
import "./FilterItem.scss";

// looping through items to output filter checkboxes
const FilterItem = ({ handleFilter, items }) => {
    return items.map((item, i) => {
        return (
            <div className="filter-item">
                <section><label>{item[0]}</label></section>

                <section>
                    <input type="checkbox" name="radFilters" 
                    onClick={handleFilter} value={item[1]} />
                </section>
            </div>
        )
    })
}

export default FilterItem;