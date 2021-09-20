import React from 'react';
import "./Card.scss";

// take some data from array and map through it to store facts to output
const getFacts = (props) => {
    const { abv, volume, first_brewed, food_pairing, description } = props;

    return [
        ["ABV", `${abv}%`], 
        
        ["Volume", `${volume.value} ${volume.unit}`],
    
        ["First Brewed", first_brewed], 
    
        ["Food Pairing", food_pairing.join(", ")],
    
        ["Description", description],
    ];
}

// receiving data from array and outputting an individual beer card
const Card = (props) => {
    const { name, image } = props;
    
    return (
        <div className="card">
            <section className="card__text">
                <h3 className="card__text-heading">{name}</h3>

                <p className="card__text-image">
                    <img src={image} alt={name}  />
                </p>
                
                <p className="card__text-description">
                    <section>
                        {getFacts(props).map((fact) => <p><b>{fact[0]}: </b>{fact[1]}</p>)}
                    </section>
                </p>
            </section>
        </div>
    )
}

export default Card;