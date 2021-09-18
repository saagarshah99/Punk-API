import React from 'react';
import "./Card.scss";

const Card = ({ name, image, description }) => {
    return (
        <div className="card">
            <section className="card__text">
                {/* TODO: align all headings evenly */}
                <h3>{name}</h3>
                
                {/* TODO: add scrollbar/see more button (for longer descriptions) */}
                <p>{description}</p>
            </section>

            <section className="card__image">
                <img src={image} alt={name}  />
            </section>
        </div>
    )
}

export default Card;