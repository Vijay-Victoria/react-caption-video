
import React from 'react';
import ReactPlayer from 'react-player';
import styles from '../styles/VideoPlayer.module.css';

const VideoPlayer = ({ videoUrl, captions }) => {
    const videoConfig = {
        file: {
          tracks: [
            {
              kind: "subtitles",
              src:`data:text/vtt,WEBVTT\n\n${captions.map((caption) => `${caption.start} --> ${caption.end}\n${caption.text}\n\n`).join('')}`,
              srcLang: "en",
              label: "English",
              default: true,
            },
          ],
        },
      };
   
  return (
    <div className={styles.videoPlayer}>
      {videoUrl && (
    <ReactPlayer 
    url={videoUrl}
    controls={true}
    playing={true}
    muted={false}
    config={videoConfig} 
        
        />
         
      )}
    </div>
  );
};

export default VideoPlayer;