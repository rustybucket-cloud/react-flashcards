import React, { useState, useEffect } from 'react';
import Card from "./Card";
import Selectors from "./Selectors";

function Flashcards() {
    const [ spanish, setSpanish ] = useState("");
    const [ english, setEnglish ] = useState('');

    const updateWord = () => {
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
            const rand = Math.floor(Math.random() * data.length); 
            setSpanish(data[rand].spanish);
            setEnglish(data[rand].english);
        });
    }

    useEffect( () => {
        updateWord();
    }, [])

    return (
        <main>
            <Card en={english} sp={spanish}/>
            <Selectors onClick={updateWord}/>
        </main>
    );
}

export default Flashcards;