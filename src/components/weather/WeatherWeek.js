import React, { Component } from 'react';
import { Segment, Container } from 'semantic-ui-react';
import axios from 'axios';
import WeatherDays from './WeatherDays';
import * as data from './weather.json';
import './weatherIcons/css/weather-icons.css';
import './weatherIcons/css/weather-icons-wind.css';
import './weatherIcons/font/weathericons-regular-webfont.svg';
import './weatherIcons/icon.css';

class WeatherWeek extends Component {
  state = {
    weather: {}
  };

  componentDidMount() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?id=${
          this.props.match.params.id
        }&units=metric&APPID=`
      )
      .then(res => this.setState({ weather: res.data }))
      .catch(error => {
        // handle error
        console.log(error);
      }); //
  }

  render() {
    return (
      <Container>
        <div className="App">
          <Segment basic>
            <header className="App-header">
              {this.state.weather.list && <h1>{this.state.weather.city.name}</h1>}
              <Segment.Group basic horizontal>
                {this.state.weather.list && <WeatherDays weather={this.state.weather} />}
              </Segment.Group>
            </header>
          </Segment>
        </div>
      </Container>
    );
  }
}

export default WeatherWeek;
