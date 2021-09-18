import React from 'react';
import './style.css'
import WhiteContainer from '../../components/WhiteContainer';
import flareFull from '../../images/flare-casual-full.png';
import youtubeIcon from '../../images/youtubefavicon.ico';
import twitterIcon from '../../images/twitterfavicon.ico';
import redditIcon from '../../images/redditfavicon.png';

function Home() {
    return (
        <div>
            <div className="title-container">
                <p className="title-text">
                    <img id="flare-bust" src={flareFull} alt="flare-bust" />
                    Shiranui Flare<span className="title-text-span">不知火フレア</span>
                </p>
            </div>
            <WhiteContainer className="full-vertical-container">
                <h1>"Noon-nui! This is hololive 3rd Gen's Shiranui Flare!"</h1>
                <p>A half-elf born to a human and elf. Usually enjoys life as she pleases.</p>
                <p>Wants to be a source of comfort so rely on her whenever you're in trouble. She may be passionate and overly sentimental, but praising her will bring her joy, even if also a little embarrassment! "Hehehe! Let's get along!"</p>
                <p>The fairy that follows her everywhere is named "Kintsuba."</p>
                <p className="footnote-text">From official bio</p>
                <div>
                    <h3>Socials/Links</h3>
                    <p>
                        <img className="social-icon" src={youtubeIcon} alt="youtube icon" />
                        <a className="social-link" href="https://www.youtube.com/channel/UCvInZx9h3jC2JzsIzoOebWg" rel="noreferrer" target="_blank"> Youtube channel</a>
                    </p>
                    <p>
                        <img className="social-icon" src={twitterIcon} alt="twitter icon" />
                        <a className="social-link" href="https://twitter.com/shiranuiflare" rel="noreferrer" target="_blank"> Twitter</a>
                    </p>
                    <p>
                        <img className="social-icon" src={redditIcon} alt="reddit icon" />
                        <a className="social-link" href="https://www.reddit.com/user/shiranuiflare" rel="noreferrer" target="_blank"> Reddit</a>
                    </p>
                </div>
            </WhiteContainer>
        </div>
    );
}

export default Home;
