import React from 'react';
import "./CardList.scss";
import Card from './Card/Card';

// receiving array and mapping through it to output card for each beer
const CardList = ({ beerArr }) => beerArr.map((beer) => <Card beer={beer} />);

export default CardList;