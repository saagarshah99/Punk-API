import React from 'react';
import "./CardList.scss";
import Card from './Card/Card';

const CardList = ({ beerArr }) => {
    
    return beerArr.map(({ name, image_url, description, ph, abv, first_brewed }) => {
        return (
            <Card 
                name={name} 
                image={image_url} 
                description={description} 
                abv={abv}
                first_brewed={first_brewed}
                ph={ph} 
            />
        )
    })
}

export default CardList;