import React from 'react';
import "./Card.scss";

const Card = ({ name, image, description }) => {
    return (
        <div className="card">
            <section className="card__text">
                <h3>{name}</h3>
                <p>{description}</p>
            </section>

            <section className="card__image">
                <img src={image} alt={name}  />
            </section>
        </div>
    )
}

export default Card;