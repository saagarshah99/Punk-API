import React from 'react';
import "./Main.scss";
import beers from "../../data/beers";

import CardList from './CardList/CardList';

const Main = () => {
    
    return (
        <div>
            <h2>Main</h2>

            <div className="card-list">
                <CardList beerArr={beers} />
                {/* return card list here */}
            </div>
        </div>
    )
    
}

export default Main;