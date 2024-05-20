import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [filters, setFilters] = useState({});
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchData();
  }, [pageSize, currentPage, filters]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/users`, {
        params: {
          limit: pageSize,
          skip: (currentPage - 1) * pageSize,
          ...filters,
        },
      });
      setData(response.data.users);
      setTotalPages(Math.ceil(response.data.total / pageSize));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <DataContext.Provider value={{ data, pageSize, setPageSize, searchValue, setSearchValue, filters, updateFilters, totalPages, goToPage }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
