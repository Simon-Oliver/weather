import React, { Component } from 'react';

const WeatherDay = props => {
  const days = [];
  const listItems = data.default.list.map(e => <li key={e.dt}>{e.dt_txt}</li>);
  return listItems;
};

export default WeatherDay;
