import React from 'react';

const DataTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Birth Date</th>
          <th>Phone</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.birthDate}</td>
            <td>{item.phone}</td>
            <td>{item.address.address}</td>
            <td>{item.address.city}</td>
            <td>{item.address.state}</td>
            <td>{item.address.zip}</td>
            <td>{item.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
