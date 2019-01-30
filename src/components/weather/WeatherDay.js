import React from 'react';
import { Segment, Card, Container } from 'semantic-ui-react';
import dateFns from 'date-fns';

const WeatherDay = props => {
  const { dayKey, data } = props.location.state;

  const listItems = data[dayKey].map(e => (
    <Segment basic>
      <Card key={e.dt_txt}>
        <Card.Content>
          <Card.Header>{dateFns.format(dateFns.parse(e.dt_txt), 'HH:00')}</Card.Header>
          <Card.Meta>
            <span className="date">{e.weather[0].description}</span>
          </Card.Meta>
          <i className={`wi wi-owm-${e.weather[0].id}`} />
          <Card.Description>{e.main.temp}</Card.Description>
        </Card.Content>
      </Card>
    </Segment>
  ));
  return <Segment.Group horizontal>{listItems}</Segment.Group>;
};

export default WeatherDay;
