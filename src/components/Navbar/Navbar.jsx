import React from 'react';
import "./Navbar.scss";

import FiltersList from "./FiltersList/FiltersList";
import SearchBox from './SearchBox/SearchBox';

const Navbar = () => {
    return (
        <>
            <h2>Navbar</h2>
            <SearchBox />
            <FiltersList />
        </>
    )
}

export default Navbar;