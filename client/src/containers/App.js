import React from 'react';
import './App.css';

import AlarmForm from '../components/AlarmForm';
import AlarmList from '../components/AlarmList';
import Navbar from '../components/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <AlarmForm />
        <AlarmList />
      </div>
    );
  }
}

export default App;
