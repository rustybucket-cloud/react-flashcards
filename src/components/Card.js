import React, { useState, useEffect } from 'react';

function Card(props) {
    const handleClick = ({currentTarget}) => {
        currentTarget.classList.toggle('is-flipped');
    };

    return (
        <div className="scene">
            <div className="card" onClick={handleClick}>
                <div className="card__face card__face--front">{props.sp}</div>
                <div className="card__face card__face--back"><div><p>{props.en}</p></div></div>
            </div>
        </div>
    );
}

export default Card;