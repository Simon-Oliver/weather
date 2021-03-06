import React, { Component } from 'react';
import dateFns from 'date-fns';
import { Segment, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class WeatherDays extends Component {
  groupBy = (objectArray, property) =>
    objectArray.reduce((acc, obj) => {
      const key = dateFns.format(obj[property], 'dddd'); // Full day name as key
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});

  render() {
    const groupedDays = this.groupBy(this.props.weather.list, 'dt_txt');

    const dayKeys = Object.keys(groupedDays);

    const displayDays = [];
    dayKeys.forEach(day => displayDays.push(groupedDays[day][0]));

    const listItems = displayDays.map(e => (
      <Segment key={e.dt_txt}>
        <Card
          as={Link}
          to={{
            pathname: '/weather/day',
            state: { dayKey: dateFns.format(dateFns.parse(e.dt_txt), 'dddd'), data: groupedDays }
          }}
        >
          <Card.Content>
            <Card.Header>{dateFns.format(dateFns.parse(e.dt_txt), 'dddd')}</Card.Header>
            <Card.Meta>
              <span className="date">{e.weather[0].description}</span>
            </Card.Meta>
            <i className={`wi wi-owm-${e.weather[0].id}`} />
            <Card.Description>{e.main.temp}</Card.Description>
          </Card.Content>
        </Card>
      </Segment>
    ));
    return listItems;
  }
}

export default WeatherDays;
