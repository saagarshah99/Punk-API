import React from 'react';
import "./CardList.scss";
import Card from './Card/Card';

// receiving array, shuffling it and mapping through it to output card for each beer
const CardList = ({ beerArr }) => {
    const shuffledBeers = beerArr.sort(() => Math.random() - 0.5);
    
    return shuffledBeers.map((beer) => <Card beer={beer} />);
}

export default CardList;