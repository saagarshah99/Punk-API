import React from 'react';
import "./Main.scss";
import beers from "../../data/beers";

import CardList from './CardList/CardList';

const Main = () => {
    return (
        <main>
            <div className="card-list">
                <CardList beerArr={beers} />
            </div>
        </main>
    )
}

export default Main;