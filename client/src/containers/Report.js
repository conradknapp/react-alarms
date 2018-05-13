import React from 'react';
import './Report.css';

import Navbar from '../components/Navbar';
import LogForm from '../components/LogForm';
import LogTable from '../components/LogTable';

class Report extends React.Component {
  state = {
    searchTerm: ""
  };

  handleInputChange = evt => {
    const searchTerm = evt.target.value;
    this.setState({ searchTerm });
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <LogForm
          handleInputChange={this.handleInputChange}
          searchTerm={this.state.searchTerm}
        />
        <LogTable
          searchTerm={this.state.searchTerm}
        />
      </div>
    );
  }
};

export default Report;