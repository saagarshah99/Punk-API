import React from 'react';
import "./FilterItem.scss";

const FilterItem = ({ handleFilter, items }) => {
    return items.map((item) => {
        
        return (
            <div className="filter-item">
                <section>
                    <label>{item[0]}</label>
                </section>
                <section>
                    <input type="radio" name="radFilters" onClick={handleFilter} value={item[1]} />
                </section>
            </div>
        )
    })
}

export default FilterItem;