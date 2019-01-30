import React, { Component } from 'react';
import { Segment, Container } from 'semantic-ui-react';
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
          <Segment basic>
            <header className="App-header">
              <h1>{data.default.city.name}</h1>
              <Segment.Group basic horizontal>
                <WeatherDays />
              </Segment.Group>
            </header>
          </Segment>
        </div>
      </Container>
    );
  }
}

export default WeatherWeek;
