import React from 'react';
import './App.css';

import AlarmForm from '../components/AlarmForm';
import AlarmList from '../components/AlarmList';
import Navbar from '../components/Navbar';
import Tagline from '../components/Tagline';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Tagline />
        <AlarmForm />
        <AlarmList />
      </div>
    );
  }
}

export default App;
