import React from 'react';
import './style.css';

function Container(props) {
    return (
        <div className="box-container">
            {props.children}
        </div>
    );
}

export default Container;
