import React from 'react';

function CaptionList({ captions }) {
  return (
    <div >
      <ul>
        {captions.map((caption, index) => (
          <li key={index}>
            ({caption.start} - {caption.end}): {caption.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CaptionList;