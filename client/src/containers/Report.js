import React from 'react';

import LogForm from '../components/LogForm';
import Table from '../components/Table';
import Navbar from '../components/Navbar';
import LogList from '../components/LogList';

const Report = () => {
  return (
    <div className="App">
      <Navbar />
      <LogForm />
      <Table />
      <LogList />
    </div>
  );
};

export default Report;