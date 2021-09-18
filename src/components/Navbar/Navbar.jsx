import React from 'react';
import "./Navbar.scss";

import FiltersList from "./SearchBox/FiltersList/FiltersList";
import SearchBox from './SearchBox/SearchBox';

const Navbar = () => {
    return (
        <header className="navbar">
            <SearchBox />
            <FiltersList />
        </header>
    )
}

export default Navbar;