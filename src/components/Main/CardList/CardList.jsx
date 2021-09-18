import React from 'react';
import "./CardList.scss";
import Card from './Card/Card';

const CardList = ({ beerArr }) => {
    
    return beerArr.map(({ name, image_url, description }) => {
        return (
            <Card name={name} image={image_url} description={description} />
        )
    })
}

export default CardList;