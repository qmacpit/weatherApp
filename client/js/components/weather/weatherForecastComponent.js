import { PropTypes } from 'react';

import AbstractWeatherComponent from './abstractWeatherComponent';

class WeatherForecaseComponent extends AbstractWeatherComponent {

  getDate() {
    const { day, date } = this.props.condition;
    return `${day}, ${date}`;
  }

  getTemperature() {
    const { condition, temperatureDecorator } = this.props;
    return `${temperatureDecorator(condition.high)} / ${temperatureDecorator(condition.low)}`;
  }

}

WeatherForecaseComponent.propTypes = {
  condition: PropTypes.shape({
    code: PropTypes.string,
    high: PropTypes.string,
    low: PropTypes.string,
    text: PropTypes.string,
    day: PropTypes.string,
    date: PropTypes.string
  }).isRequired,
  temperatureDecorator: PropTypes.func.isRequired
};

export default WeatherForecaseComponent;
