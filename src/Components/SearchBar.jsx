// src/Components/SearchBar.js
import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ setSearchTerm }) => {
    // implemented Searching functionality
  return (
    <div className="search-bar-container">
      <h1>PDF Explorer Application</h1>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search for PDFs..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <i className="search-icon fas fa-search"></i>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired
};

export default SearchBar;
