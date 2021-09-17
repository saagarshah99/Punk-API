import React from 'react';
import "./Card.scss";

const Card = ({ name, image }) => {
    return (
        <div>
            <b>Card:</b> 
            {name}

            <img src={image} alt={name} width="20"  />
        </div>
    )
}

export default Card;