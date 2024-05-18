
import React, { useState } from 'react';
import VideoInput from './components/VideoInput';
import CaptionInput from './components/CaptionInput';
import VideoPlayer from './components/VideoPlayer';
import CaptionList from './components/CaptionList';
import styles from './styles/App.module.css';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [captions, setCaptions] = useState([]);

  const addCaption = (caption) => {
    setCaptions([...captions, caption]);
  };

  return (
    <div className={styles.app}>
      <h1>Video Captioning Tool</h1>
      <VideoInput setVideoUrl={setVideoUrl} />
      <CaptionInput onAddCaption={addCaption} />
      <CaptionList captions={captions} />
      <VideoPlayer videoUrl={videoUrl} captions={captions} />
    </div>
  );
}

export default App;