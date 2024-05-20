import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import DataTable from '../components/DataTable';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';

const UsersPage = () => {
  const { data } = useContext(DataContext);

  return (
    <div>
      <h2>Users Page</h2>
      <Filters />
      <DataTable data={data} />
      <Pagination />
    </div>
  );
};

export default UsersPage;
