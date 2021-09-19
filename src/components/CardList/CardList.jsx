import React from 'react';
import "./CardList.scss";
import Card from './Card/Card';

// receiving array and mapping through it to output card for each beer (passing in data w/ props)
const CardList = ({ beerArr }) => {
    
    return beerArr.map((beer) => {
        
        const {name, image_url, description, volume, abv, first_brewed, food_pairing} = beer;
        
        return (
            <Card 
                name={name} 
                image={image_url} 
                description={description} 
                abv={abv} 
                volume={volume} 
                first_brewed={first_brewed} 
                food_pairing={food_pairing} 
            />
        )
    })
}

export default CardList;