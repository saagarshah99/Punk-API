import React from 'react';
import "./FilterItem.scss";

const FilterItem = ({items}) => {
    return items.map((item) => {
        return (
            <div className="filter-item">
                <section>
                    <label>{item}</label>
                </section>
                <section>
                    <input type="checkbox" value={item} />
                </section>
            </div>
        )
    })
}

export default FilterItem;