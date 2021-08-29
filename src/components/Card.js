import React, { useState, useEffect } from 'react';

function Card() {
    const [ spanish, setSpanish ] = useState("");
    const [ english, setEnglish ] = useState('');

    const handleClick = ({currentTarget}) => {
        currentTarget.classList.toggle('is-flipped');
    };

    useEffect( () => {
        fetch('https://gypgdligebfievkswfrr.supabase.co/rest/v1/Spanish?select=*', {
            "method": "GET",
            "headers": {
                "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDE3MzExNCwiZXhwIjoxOTQ1NzQ5MTE0fQ.3rL9yOf7yBO-eqYdsZWkxU8wQGoBVLufdSm5GzYIt24",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDE3MzExNCwiZXhwIjoxOTQ1NzQ5MTE0fQ.3rL9yOf7yBO-eqYdsZWkxU8wQGoBVLufdSm5GzYIt24"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setSpanish(data[0].spanish);
            setEnglish(data[0].english);
        });
    }, [])

    return (
        <div className="scene">
            <div className="card" onClick={handleClick}>
                <div className="card__face card__face--front">{spanish}</div>
                <div className="card__face card__face--back"><div><p>{english}</p></div></div>
            </div>
        </div>
    );
}

export default Card;