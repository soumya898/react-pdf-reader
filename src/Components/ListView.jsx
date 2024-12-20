
import React from 'react';
import { Link } from 'react-router-dom';

const ListView = ({ pdfs }) => {
  // Check if the pdfs prop is an array and if it has any items
  if (!Array.isArray(pdfs) || pdfs.length === 0) {
    return <div>No PDFs available</div>;
  }

  return (
    <div className="list-view">
      {pdfs.map((pdf, index) => (
        <div key={index} className="pdf-item">
        
          <h3>{pdf.name}</h3>
      
          <p className="author">Author: {pdf.author}</p>
        
          <p className="published">Published: {pdf.published}</p>
          
          {/* Link to the reader view for the selected PDF */}
          <Link to={`/reader/${encodeURIComponent(pdf.name)}`} className="view-button">
            View PDF
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListView;
