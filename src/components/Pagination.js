import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Pagination = () => {
  const { totalPages, currentPage, goToPage } = useContext(DataContext);

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div>
      {getPageNumbers().map((pageNumber) => (
        <button key={pageNumber} onClick={() => goToPage(pageNumber)} className={pageNumber === currentPage ? 'active' : ''}>
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
