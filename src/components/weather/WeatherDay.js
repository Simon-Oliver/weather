import React, { Component } from 'react';
import { Menu, Segment, Link, Button, Card } from 'semantic-ui-react';
import dateFns from 'date-fns';

const WeatherDay = props => {
  const { dayKey, data } = props.location.state;

  console.log(data[dayKey]);
  const listItems = data[dayKey].map(e => (
    <Card>
      <Card.Content>
        <Card.Header>{dateFns.format(dateFns.parse(e.dt_txt), 'dddd')}</Card.Header>
        <Card.Meta>
          <span className="date">{e.weather[0].description}</span>
        </Card.Meta>
        <i className={`wi wi-owm-${e.weather[0].id}`} />
        <Card.Description>{e.main.temp}</Card.Description>
      </Card.Content>
    </Card>
  ));
  return <Segment.Group horizontal>{listItems}</Segment.Group>;
};

export default WeatherDay;
