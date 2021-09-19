import React from 'react';
import './style.css';

function SocialLink(props) {
    return (
        <p>
            <img className="social-icon" src={props.icon} alt={props.altText}/>
            <a className="social-link" href={props.link} rel="noreferrer" target="_blank"> {props.text}</a>
        </p>
    );
}

export default SocialLink;
