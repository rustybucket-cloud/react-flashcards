import React, { useState } from "react";

function AddWord() {
    const [ en, setEn ] = useState('');
    const [ sp, setSp ] = useState('');

    const handleEnChange = ({target}) => {
        setEn(target.value);
    }

    const handleSpChange = ({target}) => {
        setSp(target.value);
    }

    const handleClick = () => {
        fetch('https://gypgdligebfievkswfrr.supabase.co/rest/v1/Spanish', {
            'method': "POST", 
            'headers': {
                "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDE3MzExNCwiZXhwIjoxOTQ1NzQ5MTE0fQ.3rL9yOf7yBO-eqYdsZWkxU8wQGoBVLufdSm5GzYIt24",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDE3MzExNCwiZXhwIjoxOTQ1NzQ5MTE0fQ.3rL9yOf7yBO-eqYdsZWkxU8wQGoBVLufdSm5GzYIt24",
                "Content-Type": "application/json",
                "Prefer": "return=representation"
            },
            body: `{"english": "${en}", "spanish": "${sp}"}`
        })
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .catch(response => console.log(response))
    }

    return(
        <div className="AddWord">
            <form>
                <label htmlFor="en">English
                    <input type="text" id="en" name="en" className="english" value={en} onChange={handleEnChange} />
                </label>
                
                <label htmlFor="sp">Spanish
                    <input type="text" id="sp" className="english" value={sp} onChange={handleSpChange} />
                </label>
                
                <button type="button" onClick={handleClick}>Add Word</button>
            </form>
        </div>
    );
}

export default AddWord;