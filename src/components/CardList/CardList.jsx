import React from 'react';
import "./CardList.scss";
import Card from './Card/Card';

// receiving array and mapping through it to output card for each beer
const CardList = ({ beerArr }) => {
    
    return beerArr.map((beer) => {
        
        const {
            name, image_url, description, 
        
            abv, ph, first_brewed, food_pairing,

        } = beer;
        
        return (
            <Card 
                name={name} 
                image={image_url} 
                description={description} 
                abv={abv} ph={ph} 
                first_brewed={first_brewed} 
                food_pairing={food_pairing}
            />
        )
    })
}

export default CardList;