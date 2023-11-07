import React, { useState } from 'react';
import './App.css';
import FileToUpload from './FileToUpload';
import PdfToView from './PdfToView';
import PageSelection from './PageSelection';


import { AppStateProvider } from './AppStateContext';
import './styles.css';
function App() {
  const [uploadedPDF, setUploadedPDF] = useState(null);
  const [selectedPages, setSelectedPages] = useState([]);
  const [downloadLink, setDownloadLink] = useState(null);

  const handlePDFUpload = (file) => {
    setUploadedPDF(file);
  };

  const handleTogglePage = (page) => {
    if (selectedPages.includes(page)) {
      setSelectedPages(selectedPages.filter((p) => p !== page));
    } else {
      setSelectedPages([...selectedPages, page]);
    }
  };

  const initiateExtraction = () => {
    fetch('/api/extract', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ selectedPages }),
    })
      .then((response) => response.json())
      .then((data) => {
        const newDownloadLink = data.downloadLink;
        setDownloadLink(newDownloadLink);
      })
      .catch((error) => {
        console.error('PDF extraction failed:', error);
      });
  };

  return (
    <div className="App">
      <h1>PDF Page Viewer</h1>
      <FileToUpload onPDFUpload={handlePDFUpload} />
      {uploadedPDF && (
        <div>
          <PageSelection
            numPages={uploadedPDF.numPages}
            selectedPages={selectedPages}
            onTogglePage={handleTogglePage}
          />
          <PdfToView pdfFile={uploadedPDF} selectedPages={selectedPages} />
          <button onClick={initiateExtraction}>Initiate Extraction</button>
        </div>
      )}

      {downloadLink && (
        <div>
          <a href={downloadLink} download="extracted.pdf">
            Download Extracted PDF
          </a>
        </div>
      )}

      <div className="element">This is a responsive element</div>
    </div>
  );
}

export default App;
