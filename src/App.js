import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import WeatherList from './containers/weather_list';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
