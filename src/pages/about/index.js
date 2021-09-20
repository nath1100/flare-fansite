import React from 'react';
import WhiteContainer from '../../components/WhiteContainer';
import './style.css';

function About() {
    
    return (
        <>
            <h1 id="about-title-text" className="title-text">About
                <span className="title-text-span">what this is</span>
            </h1>
            <WhiteContainer>
                <h1>Website</h1>
                <p>
                    This website is an unofficial fan site dedicated to Shiranui Flare,
                    a Virtual Youtuber affiliated with the VTuber agency Hololive, owned by Cover corp.
                    Shiranui Flare and all associated intellectual property is owned by Cover corp,
                    who is in no way affiliated to this site's maintainer.
                </p>
                <p>
                    This site is simply a project for learning React and web design,
                    whilst also sharing a bit of Flare with the world. &#x1F525;
                </p>
                <h1>Me</h1>
                <p>
                    I'm just an Elfriend trying to learn some new skills. &#x1F525;
                </p>
            </WhiteContainer>
        </>
    );
}

export default About;
