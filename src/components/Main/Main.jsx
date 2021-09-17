import React from 'react';
import "./Main.scss";
import beers from "../../data/beers";

import CardList from './CardList/CardList';

const Main = () => {
    
    return (
        <div>
            <h2>Main:</h2>

            <h4>Card List:</h4>
            <CardList beerArr={beers} />
            {/* return card list here */}
        </div>
    )
    
}

export default Main;