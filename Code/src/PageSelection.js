import React from 'react';
import './index.css';
import './styles.css';
import './App.css';
function PageSelection({ numPages, selectedPages, onTogglePage }) {
  return (
    <div>
      {Array.from(new Array(numPages), (el, index) => (
        <label key={`page_${index + 1}`}>
          Page {index + 1}
          <input
            type="checkbox"
            checked={selectedPages.includes(index + 1)}
            onChange={() => onTogglePage(index + 1)}
          />
        </label>
      ))}
    </div>
  );
}

export default PageSelection;
