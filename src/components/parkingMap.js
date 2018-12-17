import React, { Component } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';

class ParkingMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Available: [],
      selected: null
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.fetchAvailable = this.fetchAvailable.bind(this);
    this.postRent = this.postRent.bind(this);
  }

  componentDidMount() {
    this.fetchAvailable();
  }

  async fetchAvailable() {
    const data = ['1', '2'];
    //const data = await axios.get('');
    this.setState({ Available: data });
    console.log(data);
  }

  async postRent(val) {
    const res = await axios.post('', val);
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to and fetch weather data
    console.log(this.state.Available);
    console.log(this.state.selected);

    if (this.state.selected == null) alert('You did not do anything');
    else alert('You have rent number' + this.state.selected);
    window.location = '/';
  }

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        style={{ display: 'block', padding: '10%' }}
      >
        <div className="map">
          <div
            class="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('1') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('1') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '1' })}
              >
                1
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('2') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('2') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '2' })}
              >
                2
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('3') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('3') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '3' })}
              >
                3
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('4') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('4') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '4' })}
              >
                4
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('5') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('5') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '5' })}
              >
                5
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('6') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('6') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '6' })}
              >
                6
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('7') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('7') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '7' })}
              >
                7
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('8') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('8') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '8' })}
              >
                8
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('9') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('9') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '9' })}
              >
                9
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('10') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('10') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '10' })}
              >
                10
              </button>
            </div>
          </div>
          <div
            class="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('11') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('11') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '11' })}
              >
                11
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('12') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('12') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '12' })}
              >
                12
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('13') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('13') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '13' })}
              >
                13
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('14') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('14') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '14' })}
              >
                14
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('15') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('15') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '15' })}
              >
                15
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('16') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('16') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '16' })}
              >
                16
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('17') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('17') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '17' })}
              >
                17
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('18') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('18') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '18' })}
              >
                18
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('19') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('19') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '19' })}
              >
                19
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('20') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('20') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '20' })}
              >
                20
              </button>
            </div>
          </div>
          <div
            class="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('21') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('21') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '21' })}
              >
                21
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('22') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('22') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '22' })}
              >
                22
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('23') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('23') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '23' })}
              >
                23
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('24') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('24') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '24' })}
              >
                24
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('25') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('25') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '25' })}
              >
                25
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('26') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('26') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '26' })}
              >
                26
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('27') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('27') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '27' })}
              >
                27
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('28') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('28') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '28' })}
              >
                28
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('29') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('29') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '29' })}
              >
                29
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('30') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('30') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '30' })}
              >
                30
              </button>
            </div>
          </div>

          <div
            class="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('31') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('31') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '31' })}
              >
                31
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('32') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('32') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '32' })}
              >
                32
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('33') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('33') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '33' })}
              >
                33
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('34') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('34') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '34' })}
              >
                34
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('35') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('35') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '35' })}
              >
                35
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('36') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('36') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '36' })}
              >
                36
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('37') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('37') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '37' })}
              >
                37
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('38') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('38') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '38' })}
              >
                38
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('39') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('39') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '39' })}
              >
                39
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className={
                  this.state.Available.indexOf('40') > -1
                    ? 'btn btn-success map-button'
                    : 'btn btn-secondary map-button'
                }
                disabled={this.state.Available.indexOf('40') > -1 ? '' : 'true'}
                onClick={() => this.setState({ selected: '40' })}
              >
                40
              </button>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary" style={{ margin: '5%' }}>
          Submit
        </button>
      </form>
    );
  }
}
export default ParkingMap;
