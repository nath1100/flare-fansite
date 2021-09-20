import React from 'react';
import MediaContainer from '../../components/MediaContainer';
import WhiteContainer from '../../components/WhiteContainer';
import './style.css';

function Media() {
    return (
        <>
            <h1 id="song-title-text" className="title-text">Songs
                <span className="title-text-span">original and covers</span>
            </h1>
            <WhiteContainer className="media-body-container">
                <MediaContainer src="https://www.youtube.com/embed/G4PT1phuM9M" title="Smile and Go!! Short Version" />
                <MediaContainer src="https://www.youtube.com/embed/Tm28179erkY" title="Goodbye Sengen Cover" />
                <MediaContainer src="https://www.youtube.com/embed/u5r8B1fDB8g" title="Kaibutsu Cover" />
                <MediaContainer src="https://www.youtube.com/embed/YVdA-QCcXYc" title="Naisho no Hanashi Cover" />
                <MediaContainer src="https://www.youtube.com/embed/3y8oIuEkqQs" title="KING Cover" />
                <MediaContainer src="https://www.youtube.com/embed/Ur0K2WA67jw" title="Alice in N.Y." />
                <MediaContainer src="https://www.youtube.com/embed/6qESBvBUqus" title="Asa Made Halloween" />
                <MediaContainer src="https://www.youtube.com/embed/EBj7JZiyR-s" title="Dakara boku wa ongaku o yameta" />
                <MediaContainer src="https://www.youtube.com/embed/n8Z7mUOGEAE" title="Ai Kotoba III" />
            </WhiteContainer>
            <h1 id="stream-title-text" className="title-text">Streams
                <span className="title-text-span">past archives</span>
            </h1>
            <WhiteContainer className="media-body-container">
                <MediaContainer src="https://www.youtube.com/embed/rvUmaX9b_ZE" title="Deltarune Chapter 2" />
                <MediaContainer src="https://www.youtube.com/embed/--Xvzz7DMRQ" title="Minecraft Hololive Server" />
                <MediaContainer src="https://www.youtube.com/embed/9_cJcDTTuWY" title="Karaoke Stream" />
                <MediaContainer src="https://www.youtube.com/embed/gNHtUjeDfps" title="Tsugunohi Horror Game" />
                <MediaContainer src="https://www.youtube.com/embed/_zx9gMEfsxg" title="Inside Game" />
            </WhiteContainer>
            <h1 id="concert-title-text" className="title-text">3D Concerts
                <span className="title-text-span">free to watch</span>
            </h1>
            <WhiteContainer className="media-body-container">
                <MediaContainer src="https://www.youtube.com/embed/ZMlPAsIJslA" title="Second Anniversary Live" />
                <MediaContainer src="https://www.youtube.com/embed/_rJhAn6ZPuU" title="2021 Birthday Live" />
            </WhiteContainer>
        </>
    );
}

export default Media;
