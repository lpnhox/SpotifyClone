import React from 'react';

const Card = ({cover, title, subtitle}) => {
    return (
        <div>
            <div className="card">
                <div className="card__cover">
                    <img src={cover} alt="" />
                </div>
                <div className="card__title">
                    <span>{title}</span>
                </div>
                <div className="card__subtitle">
                    <span>{subtitle}</span>
                </div>
            </div>

        </div>
    );
};

export default Card;