import React, { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';
import DataTable from '../components/DataTable';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import axios from 'axios';

const ProductsPage = () => {
  const { data, setData, pageSize, currentPage, filters, setTotalPages } = useContext(DataContext);

  useEffect(() => {
    fetchData();
  }, [pageSize, currentPage, filters]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products`, {
        params: {
          limit: pageSize,
          skip: (currentPage - 1) * pageSize,
          ...filters,
        },
      });
      setData(response.data.products);
      setTotalPages(Math.ceil(response.data.total / pageSize));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Products Page</h2>
      <Filters />
      <DataTable data={data} />
      <Pagination />
    </div>
  );
};

export default ProductsPage;
