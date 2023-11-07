import React from 'react';
import { useAppState } from './AppStateContext'; 
// Import the useAppState hook
import './index.css';
import './styles.css';
import './App.css';
function FileToUpload() {
  const { state, dispatch } = useAppState(); // Use the useAppState hook to access the application state

  const handlePDFUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append('pdfFile', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Handle a successful response, e.g., update UI or show a success message
        console.log('PDF file uploaded successfully');
      } else {
        // Handle an error response, e.g., show an error message
        console.error('Error uploading PDF file');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  return (
    <div>
      <input type="file" onChange={(e) => handlePDFUpload(e.target.files[0])} />
      {/* Render the uploaded PDF file */}
      <div>Uploaded PDF: {state.uploadedPDF ? state.uploadedPDF.name : 'None'}</div>
    </div>
  );
}

export default FileToUpload;
