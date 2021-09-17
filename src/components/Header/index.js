import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';
import './style.css';

function Header() {
    return (
        <Container>
            <nav>
                <ul className="navigation">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/media">Media</Link>
                    </li>
                </ul>
            </nav>
        </Container>
    );
}

export default Header;
