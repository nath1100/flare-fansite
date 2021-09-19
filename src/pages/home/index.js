import React from 'react';
import './style.css'
import WhiteContainer from '../../components/WhiteContainer';
import flareFull from '../../images/flare-casual-full.png';
import youtubeIcon from '../../images/youtubefavicon.ico';
import twitterIcon from '../../images/twitterfavicon.ico';
import redditIcon from '../../images/redditfavicon.png';
import SocialLink from '../../components/SocialLink';

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
                    <SocialLink icon={youtubeIcon} altText="youtube icon" link="https://www.youtube.com/channel/UCvInZx9h3jC2JzsIzoOebWg" text="YouTube channel" />
                    <SocialLink icon={twitterIcon} altText="twitter icon" link="https://twitter.com/shiranuiflare" text="Twitter" />
                    <SocialLink icon={redditIcon} altText="reddit icon" link="https://www.reddit.com/user/shiranuiflare" text="Reddit" />
                </div>
            </WhiteContainer>
        </div>
    );
}

export default Home;
