import React, { useState } from 'react';

function CaptionInput({ onAddCaption }) {
  const [text, setText] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && start && end) {
      onAddCaption({ text, start: parseFloat(start), end: parseFloat(end) });
      setText('');
      setStart('');
      setEnd('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <form className="caption-form" onSubmit={handleSubmit}>
      <label htmlFor="caption-text">Caption Text:</label>
      <textarea
        id="caption-text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter caption text"
      ></textarea>
      <label htmlFor="start-time">Start Time (in seconds):</label>
      <input
        type="number"
        id="start-time"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        placeholder="Start time"
      />
      <label htmlFor="end-time">End Time (in seconds):</label>
      <input
        type="number"
        id="end-time"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        placeholder="End time"
      />
      <button type="submit">Add Caption</button>
    </form>
  );
}

export default CaptionInput;