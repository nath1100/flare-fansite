import React from 'react';
import './style.css';

function WhiteContainer(props) {

    return (
        <div id={props.id} className={props.className == null ? "body-container" : props.className}>
            {props.children}
        </div>
    );
}

export default WhiteContainer;
