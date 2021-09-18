import React from 'react';
import "./Card.scss";

const Card = ({ name, image, description, ph, abv, first_brewed }) => {
    return (
        <div className="card">
            <section className="card__text">
                
                {/* TODO: align all headings evenly */}
                <h3 className="card__heading">{name}</h3>
                
                {/* TODO: add scrollbar/see more button (for longer descriptions) */}
                <p className="card__description">
                    <ul>
                        <li><b>ABV:</b> {abv}%</li>
                        <li><b>First Brewed:</b> {first_brewed}</li>
                        <li><b>ph:</b> {ph}</li>
                    </ul>

                    {description}
                </p>
            </section>
            <section className="card__image">
                <img src={image} alt={name}  />
            </section>
        </div>
    )
}

export default Card;