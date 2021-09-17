import React from 'react';
import "./CardList.scss";
import Card from './Card/Card';

const CardList = ({ beerArr }) => {
    
    return beerArr.map(({ name, image_url, description }) => {
        return (
            <div>
                <Card name={name} image={image_url} description={description} />
            </div>
        )
    })
}

export default CardList;