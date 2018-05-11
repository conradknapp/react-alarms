import React, { Component } from 'react';
import './App.css';

import AlarmForm from '../components/AlarmForm';
import AlarmList from '../components/AlarmList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AlarmForm />
        <AlarmList />
      </div>
    );
  }
}

export default App;
