import React, { Component } from 'react';
import { Menu, Segment, Container, Button } from 'semantic-ui-react';
import axios from 'axios';
import WeatherDays from './WeatherDays';
import * as data from './weather.json';

class WeatherWeek extends Component {
  render() {
    return (
      <Container>
        <div className="App">
          <header className="App-header">
            <h1>{data.default.city.name}</h1>
            <WeatherDays />
          </header>
        </div>
      </Container>
    );
  }
}

export default WeatherWeek;
