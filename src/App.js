import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pasha</h1>
        <Person name="Pasha"/>
        <Person name="Anton"/>
      </div>
    );
  }
}

export default App;
