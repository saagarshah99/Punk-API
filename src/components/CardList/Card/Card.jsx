import React from 'react';
import "./Card.scss";

// take some data from array and map through it to store facts to output
const getFacts = ({ beer }) => {
    const { abv, ph, volume, first_brewed, food_pairing, description } = beer;

    return [
        ["ABV", `${abv}%`], 
        
        ["Volume", `${volume.value} ${volume.unit}`],
        
        ["ph", ph], 
    
        ["First Brewed", first_brewed], 
    
        ["Food Pairing", food_pairing.join(", ")],
    
        ["Description", description],
    ];
}

// receiving data from array and outputting an individual beer card
const Card = ({ beer }) => {
    const { name, image_url } = beer;
    
    return (
        <div className="card">
            <section className="card__text">
                <h3 className="card__text-heading">{name}</h3>

                <p className="card__text-image">
                    <img src={image_url} alt={name}  />
                </p>
                
                <p className="card__text-description">
                    <section>
                        {getFacts({beer}).map((fact) => <p><b>{fact[0]}: </b>{fact[1]}</p>)}
                    </section>
                </p>
            </section>
        </div>
    )
}

export default Card;