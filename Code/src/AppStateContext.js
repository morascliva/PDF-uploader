import React, { createContext, useContext, useReducer } from 'react';
import './index.css';
import './styles.css';
import './App.css';
// Initial state
const initialState = {
  selectedPages: [],
  uploadedPDF: null,
};


// Action types
const SELECT_PAGE = 'SELECT_PAGE';
const UPLOAD_PDF = 'UPLOAD_PDF';

// Reducer function
const appStateReducer = (state, action) => {
  switch (action.type) {
    case SELECT_PAGE:
      return { ...state, selectedPages: action.payload };
    case UPLOAD_PDF:
      return { ...state, uploadedPDF: action.payload };
    default:
      return state;
  }
};

// Create context
const AppStateContext = createContext();

// Context provider component
export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, initialState);

  const contextValue = { state, dispatch };

  return (
    <AppStateContext.Provider value={contextValue}>
      {children}
    </AppStateContext.Provider>
  );
};

// Custom hook to access the context
export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};

