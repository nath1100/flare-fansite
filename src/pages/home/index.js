import React from 'react';
import './style.css'
import WhiteContainer from '../../components/WhiteContainer';
import flareFull from '../../images/flare-casual-full.png';

function Home() {
    return (
        <div>
            <div className="title-container">
                <p className="title-text">
                    <img id="flare-bust" src={flareFull} alt="flare-bust" />
                    Shiranui Flare
                </p>
            </div>
            <WhiteContainer className="full-vertical-container">
                <h1>"Noon-nui! This is hololive 3rd Gen's Shiranui Flare!"</h1>
                <p>A half-elf born to a human and elf. Usually enjoys life as she pleases.</p>
                <p>Wants to be a source of comfort so rely on her whenever you're in trouble. She may be passionate and overly sentimental, but praising her will bring her joy, even if also a little embarrassment! "Hehehe! Let's get along!"</p>
                <p>The fairy that follows her everywhere is named "Kintsuba."</p>
            </WhiteContainer>
        </div>
    );
}

export default Home;
