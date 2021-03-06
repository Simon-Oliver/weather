import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/home/Home';
import PageNotFound from '../components/pageNotFound/PageNotFound';
import WeatherWeek from '../components/weather/WeatherWeek';
import Header from '../components/header/Header';
import WeatherDay from '../components/weather/WeatherDay';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/weather/day" component={WeatherDay} />
        <Route path="/weather/:id" component={WeatherWeek} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
