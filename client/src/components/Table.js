import React from 'react';

const Table = () => {
  return (
    <table style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
      <tbody>
      <tr>
        <th>Desc</th>
        <th>Created</th>
        <th>id</th>
      </tr>
      </tbody>
      <tbody>
      <tr>
        <td>Something</td>
        <td>1/2/93</td>
        <td>1</td>
      </tr>
      </tbody>
    </table>
  );
};

export default Table;