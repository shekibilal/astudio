import React, { useState, useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Filters = () => {
  const { pageSize, setPageSize, setSearchValue, updateFilters } = useContext(DataContext);
  const [searchInput, setSearchInput] = useState('');

  const handlePageSizeChange = (e) => {
    setPageSize(parseInt(e.target.value));
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    setSearchValue(searchInput);
  };

  const handleFilterChange = (e) => {
    updateFilters({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <select value={pageSize} onChange={handlePageSizeChange}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
      <input type="text" placeholder="Search" value={searchInput} onChange={handleSearchInputChange} />
      <button onClick={handleSearch}>Search</button>
      {/* Example filter input */}
      <input type="text" placeholder="Filter by Name" name="name" onChange={handleFilterChange} />
    </div>
  );
};

export default Filters;
