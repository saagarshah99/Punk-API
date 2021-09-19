import React from 'react';
import "./Card.scss";

// receiving data from array and outputting an individual beer card
const Card = ({ name, image, description, abv, ph, first_brewed, food_pairing }) => {
    return (
        <div className="card">
            <section className="card__text">
                <h3 className="card__text-heading">{name}</h3>

                <p className="card__text-description">
                    <section>
                        <p><b>ABV:</b> {abv}%</p>
                        <p><b>First Brewed:</b> {first_brewed}</p>
                        <p><b>ph:</b> {ph}</p>
                        
                        {/* separating foods with comma */}
                        <p><b>Food Pairing: </b>
                            {
                                food_pairing.map((food, i) => {
                                    return `${food}${i<food_pairing.length-1 ? "," : ""} `
                                })
                            }
                        </p>

                        <p>{description}</p>
                    </section>
                    <section className="card__text-image">
                        <img src={image} alt={name}  />
                    </section>
                </p>
            </section>
        </div>
    )
}

export default Card;