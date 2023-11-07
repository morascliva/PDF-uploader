


import React from 'react';
import { useAppState } from './AppStateContext';
import './index.css';
import './styles.css';
import './App.css';
function PageToSelect() {
  const { state, dispatch } = useAppState();

  const handlePageSelect = (page) => {
    // Update the selected pages
    const selectedPages = [...state.selectedPages, page];
    dispatch({ type: 'SELECT_PAGE', payload: selectedPages });
  }

  return (
    <div>
      <button onClick={() => handlePageSelect(1)}>Select Page 1</button>
      <button onClick={() => handlePageSelect(2)}>Select Page 2</button>
      {/* Render selected pages */}
      <div>Selected Pages: {state.selectedPages.join(', ')}</div>
    </div>
  );
}

export default PageToSelect;
