import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header() {
    return (
        <div className="box-container">
            <nav>
                <ul className="navigation">
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/media">MEDIA</Link>
                    </li>
                    <li>
                        <p id="header-icon">&#x1F525;</p>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
