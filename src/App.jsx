
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './Components/SearchBar';
import ListView from './Components/ListView';
import ReaderView from './Components/ReaderView';
import './App.css';

const App = () => {
  // State to hold the list of PDFs and the search term
  const [pdfList, setPdfList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch PDFs from the API on component mount
  useEffect(() => {
    fetch('https://api.npoint.io/dee51ea017d20efdfcc8')
      .then((response) => response.json())
      .then((data) => setPdfList(data))
      .catch((error) => console.error('Error fetching PDFs:', error));
  }, []);

  // Filter PDFs based on the search term
  const searchPdf = pdfList.filter((pdf) =>
    pdf.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="react-container">
        {/* Search bar component */}
        <SearchBar setSearchTerm={setSearchTerm} />

        {/* Routes for the application */}
        <Routes>
          {/* Route for the list view, passing the filtered PDFs */}
          <Route path="/" element={<ListView pdfs={searchPdf} />} />

          {/* Route for the reader view, passing the full PDF list */}
          <Route path="/reader/:pdfName" element={<ReaderView pdfList={pdfList} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
