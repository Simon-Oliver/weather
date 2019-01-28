import React, { Component } from 'react';
import { Menu, Segment, Container, Button, SegmentGroup } from 'semantic-ui-react';
import axios from 'axios';
import WeatherDays from './WeatherDays';
import * as data from './weather.json';
import './weatherIcons/css/weather-icons.css';
import './weatherIcons/css/weather-icons-wind.css';
import './weatherIcons/font/weathericons-regular-webfont.svg';
import './weatherIcons/icon.css';

class WeatherWeek extends Component {
  render() {
    return (
      <Container>
        <div className="App">
          <header className="App-header">
            <h1>{data.default.city.name}</h1>
            <Segment.Group horizontal>
              <WeatherDays />
            </Segment.Group>
          </header>
        </div>
      </Container>
    );
  }
}

export default WeatherWeek;
