import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ShareButtons from '../ShareButtons';

const ReaderView = ({ pdfList }) => {
  // Get the PDF name from the route parameters
  const { pdfName } = useParams();
  // Find the PDF from the pdfList using the PDF name
  const pdf = pdfList.find((item) => item.name === decodeURIComponent(pdfName));

  // State to keep track of the current page number
  const [pageNumber, setPageNumber] = useState(1);
  // State to manage loading status
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reset page number to 1 whenever the PDF name changes
    setPageNumber(1);
    // Set loading to true when PDF changes
    setLoading(true);
  }, [pdfName]);

  // If no PDF is found, display a message
  if (!pdf) {
    return <div className="not-found">PDF Not Found</div>;
  }

  // Function to handle moving to the next page
  const handleNextPage = () => setPageNumber((prevPage) => prevPage + 1);
  // Function to handle moving to the previous page
  const handlePreviousPage = () => setPageNumber((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));

  // Function to handle PDF load event
  const handleLoad = () => {
    console.log("PDF Loaded");  // Debugging log
    setLoading(false);
  };

  console.log("PDF URL:", `${pdf.link}#page=${pageNumber}`);  // Debugging log

  return (
    <div className="reader-view">
      {/* Link to go back to the list view */}
      <Link to="/" className="back-button">← Back to List</Link>
      {/* Display PDF title */}
      <h2 className="pdf-title">{pdf.name}</h2>

      {/* Share buttons component for social sharing */}
      <ShareButtons url={pdf.link} title={pdf.name} />

      <div className="pdf-controls">
        <div className="pagination">
          {/* Button to go to the previous page */}
          <button className="pagination-button" onClick={handlePreviousPage}>Previous</button>
          <span className="page-number">Page {pageNumber}</span>
          {/* Button to go to the next page */}
          <button className="pagination-button" onClick={handleNextPage}>Next</button>
        </div>
      </div>

      <div className="pdf-container">
        {/* Display loading message until PDF is loaded */}
        {loading && <div className="loading-message">PDF Loading...</div>}
        {/* Embed the PDF file in the document */}
        <iframe
          key={pageNumber} // Add this key prop to force re-render when pageNumber changes
          src={`${pdf.link}#page=${pageNumber}`}
          className="pdf-embed"
          type="application/pdf"
          title={pdf.name}
          onLoad={handleLoad}
        />
      </div>
    </div>
  );
};

export default ReaderView;
