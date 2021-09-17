import React from 'react';
import "./Card.scss";

const Card = ({ name, image, description }) => {
    return (
        <div>
            <h4>Card:</h4> 
            <p>{name}</p>
            
            <img src={image} alt={name} width="20"  />
            
            <p>{description}</p>
        </div>
    )
}

export default Card;