import React from 'react';
import "./FilterItem.scss";

const FilterItem = ({items}) => {
    return items.map((item) => {
        return (
            <>
                <section>
                    <label>{item}</label>
                    <input type="checkbox" value={item} />
                </section>
            </>
        )
    })
}

export default FilterItem;