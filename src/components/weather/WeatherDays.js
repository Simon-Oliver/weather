import React, { Component } from 'react';
import dateFns from 'date-fns';
import { Menu, Segment, Container, Card, Icon } from 'semantic-ui-react';
import * as data from './weather.json';

const WeatherDays = props => {
  console.log(data.default);
  const listItems = data.default.list.map(e => (
    <Card>
      <Card.Content>
        <Card.Header>{dateFns.format(dateFns.parse(e.dt_txt), 'dddd - DD/MM/YY')}</Card.Header>
        <Card.Meta>
          <span className="date">{e.weather[0].description}</span>
        </Card.Meta>
        <Card.Description>{e.main.temp_max}</Card.Description>
        <Card.Description>{e.main.temp_min}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  ));
  return listItems;
};

export default WeatherDays;
