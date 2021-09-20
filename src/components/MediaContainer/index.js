import React from 'react';
import './style.css';

function MediaContainer(props) {
    return (
        <iframe className={props.className == null ? "video-container" : props.className} width="480" height="270" src={props.src} title={props.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    );
}

export default MediaContainer;
