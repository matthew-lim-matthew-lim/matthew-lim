import React, { useEffect, useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import song from './AphexTwinXtal.mp3'

const AudioPlayer = () => {
    const audioRef = useRef(null);
  
    useEffect(() => {
      const audioElement = audioRef.current;
  
      const playPromise = audioElement.play();
  
      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
            // Audio playback started successfully
            console.log('Audio playback started');
          })
          .catch((error) => {
            // Autoplay was prevented by the browser
            console.error('Autoplay prevented: ', error);
          });
      }
    }, []);
  
    return (
      <div>
        <audio ref={audioRef} autoPlay loop>
          <source src={song} type="audio/mpeg" />
        </audio>
      </div>
    );
  };
  
  export default AudioPlayer;