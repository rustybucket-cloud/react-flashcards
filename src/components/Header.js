import React, { useState } from "react";

function Header() {
    const [ user, setUser ] = useState('User');

    return (
        <header>
            <div className = "header-container">
                <div className="header-nav">
                    <h1>Flashcard App</h1>
                    <div className="nav">
                        <ul>
                            <li><a href="#">My Sets</a></li>
                            <li><a href="#">Create a New Set</a></li>
                        </ul>
                    </div>
                </div>
                <div className="user-info">
                    <p>Hello, {user}</p>
                    <p><a href="#">Sign Out</a></p>
                </div>
            </div>
        </header>
    );
}

export default Header;