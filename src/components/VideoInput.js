
import React, { useState } from 'react';

const VideoInput = ({ setVideoUrl }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setVideoUrl(url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Video URL:</label>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} required />
      <button type="submit">Load Video</button>
    </form>
  );
};

export default VideoInput;