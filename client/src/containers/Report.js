import React from 'react';
import './Report.css';

import Navbar from '../components/Navbar';
import LogForm from '../components/LogForm';
import LogTable from '../components/LogTable';

const Report = () => {
  return (
    <div className="App">
      <Navbar />
      <LogForm />
      <LogTable />
    </div>
  );
};

export default Report;