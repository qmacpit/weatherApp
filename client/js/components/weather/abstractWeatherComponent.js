import React, { Component, PropTypes } from 'react';

import Icon from '../widgets/icon';

/*eslint-disable*/
const CODE_TO_ICON_MAPPER = {
  0: 'wi-tornado', //tornado
  1: 'wi-thunderstorm', // tropical storm
  2: 'wi-hurricane', // hurricane
  3: 'wi-thunderstorm', // severe thunderstorms
  4: 'wi-thunderstorm', // thunderstorms
  5: 'wi-sleet', // mixed rain and snow
  6: 'wi-sleet', // mixed rain and sleet
  7: 'wi-sleet', // mixed snow and sleet
  8: 'wi-snowflake-cold', // freezing drizzle
  9: 'wi-raindrops', // drizzle
  10: 'wi-rain-mix', //  freezing rain
  11: 'wi-day-showers', //  showers
  12: 'wi-day-showers', //  showers
  13: 'wi-snow', //  snow flurries
  14: 'wi-snow', //  light snow showers
  15: 'wi-snow-wind', //  blowing snow
  16: 'wi-snow', //  snow
  17: 'wi-hail', //  hail
  18: 'wi-sleet', //  sleet
  19: 'wi-dust', //  dust
  20: 'wi-fog', //  foggy
  21: 'wi-day-haze', //  haze
  22: 'wi-smoke', //  smoky
  23: 'wi-strong-wind', //  blustery
  24: 'wi-windy', //  windy
  25: 'wi-snowflake-cold', //  cold
  26: 'wi-cloudy', //  cloudy
  27: 'wi-night-alt-cloudy', //  mostly cloudy (night)
  28: 'wi-day-cloudy', //  mostly cloudy (day)
  29: 'wi-night-alt-cloudy', //  partly cloudy (night)
  30: 'wi-day-cloudy-windy', //  partly cloudy (day)
  31: 'wi-night-clear', //  clear (night)
  32: 'wi-day-sunny', //  sunny
  33: 'wi-night-clear', //  fair (night)
  34: 'wi-day-sunny', //  fair (day)
  35: 'wi-day-hail', //  mixed rain and hail
  36: 'wi-hot', //  hot
  37: 'wi-day-thunderstorm', //  isolated thunderstorms
  38: 'wi-thunderstorm', //  scattered thunderstorms
  39: 'wi-thunderstorm', //  scattered thunderstorms
  40: 'wi-day-showers', //  scattered showers
  41: 'wi-snow', //  heavy snow
  42: 'wi-snow', //  scattered snow showers
  43: 'wi-snow', //  heavy snow
  44: 'wi-day-cloudy', //  partly cloudy
  45: 'wi-lightning', //  thundershowers
  46: 'wi-snow', //  snow showers
  47: 'wi-day-sleet-storm', //  isolated thundershowers
  3200: 'wi-na', //  not available
};
/*eslint-enable*/

class AbstractWeatherComponent extends Component {

  /*eslint-disable*/
  getDate() {
    // abstract
  }

  getTemperature() {
    // abstract
  }
  /*eslint-enable*/

  render() {
    const { text, code } = this.props.condition;
    return (
      <div className="weather-state">
        <p>{this.getDate()}</p>
        <Icon icon={CODE_TO_ICON_MAPPER[code]} />
        <div>
          <span>{this.getTemperature()}</span>
          <span>{text}</span>
        </div>
      </div>
    );
  }

}

AbstractWeatherComponent.propTypes = {
  condition: PropTypes.shape({
    code: PropTypes.string,
    text: PropTypes.string
  }).isRequired
};

export default AbstractWeatherComponent;
