import React from 'react';
import "./Card.scss";

const Card = ({ name, image, description, ph }) => {
    return (
        <div className="card">
            <section className="card__text">
                
                {/* TODO: align all headings evenly */}
                <h3 className="card__heading">{name}</h3>
                <h4>PH: {ph}</h4>
                
                {/* TODO: add scrollbar/see more button (for longer descriptions) */}
                <p className="card__description">{description}</p>
            </section>
            <section className="card__image">
                <img src={image} alt={name}  />
            </section>
        </div>
    )
}

export default Card;