import React, { Component } from 'react';
import './App.css';
import ParkingMap from './components/parkingMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">PARKING LOT</div>
        <div className="d-flex justify-content-center">
          <ParkingMap />
        </div>
      </div>
    );
  }
}

export default App;
