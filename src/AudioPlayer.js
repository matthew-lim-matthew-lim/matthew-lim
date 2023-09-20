import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import song from './AphexTwinXtal.mp3'

const AudioPlayer = () => {
  return (
    <ReactAudioPlayer
      src={song} // Update with your audio file path
      autoPlay
      loop
    />
  );
};

export default AudioPlayer;