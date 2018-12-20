import React, { Component } from 'react';
import './App.css';
import ParkingMap from './components/parkingMap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { alert: 0 };
  }
  render() {
    return (
      <div className="App">
        <div className="header">PARKING LOT</div>
        <div style={{ textAlign: 'left' }}>
          <button
            type="button"
            className="btn"
            style={{ margin: '20px 0px 10px 20px', backgroundColor: '#E8BF8B' }}
            onClick={() => this.setState({ alert: this.state.alert ? 0 : 1 })}
          >
            Instruction
          </button>
        </div>
        {this.state.alert == 1 && (
          <div
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
            style={{ textAlign: 'left' }}
          >
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => this.setState({ alert: this.state.alert ? 0 : 1 })}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <strong>How to Rent a parking space:</strong>
            <br /> 1. Click Refresh button to look for available space.
            <br />
            2. Choose number of parking space you want.
            <br />
            3. Click submit to finish your rent.
          </div>
        )}

        <div className="d-flex justify-content-center">
          <ParkingMap />
        </div>
      </div>
    );
  }
}

export default App;
