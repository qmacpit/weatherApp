import { PropTypes } from 'react';

import AbstractWeatherComponent from './abstractWeatherComponent';

class WeatherStateComponent extends AbstractWeatherComponent {

  getDate() {
    return this.props.condition.date;
  }

  getTemperature() {
    const { condition, temperatureDecorator } = this.props;
    return temperatureDecorator(condition.temp);
  }

}

WeatherStateComponent.propTypes = {
  condition: PropTypes.shape({
    code: PropTypes.string,
    temp: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string
  }).isRequired,
  temperatureDecorator: PropTypes.func.isRequired
};

export default WeatherStateComponent;
