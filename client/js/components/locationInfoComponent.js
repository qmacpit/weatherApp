import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import Icon from './widgets/icon';
import LocationDetailsComponent from './location/locationDetailsComponent';
import WeatherForecastComponent from './weather/weatherForecastComponent';
import { buildDecorators } from './toolbox/decorators';

const getPreloaderClasses = isInProgress => (
  classnames({
    empty: true,
    'in-progress': isInProgress
  })
);

const buildPreloader = (title, icon, isInProgress) => (
  <article className={getPreloaderClasses(isInProgress)} >
    <h5>{title}</h5>
    <Icon icon={icon} />
  </article>
);

const noDataPreloader = buildPreloader(
  'No data - pick a city first',
  'wi-thermometer-exterior'
);

const loadingPreloader = buildPreloader(
  'loading...',
  'wi-day-sunny',
  true
);

class LocationInfoComponent extends Component {

  render() {

    if (!this.props.locationData.data) {
      return noDataPreloader;
    }

    const { data, isLoading, isError } = this.props.locationData;

    if (isLoading) {
      return loadingPreloader;
    }

    if (isError) {
      return buildPreloader('Error', 'wi-fire');
    }

    const dataContext = data.query.results.channel;
    const { item: { forecast }, units } = dataContext;
    const decorators = buildDecorators(units);

    return (
      <article>
        <LocationDetailsComponent
          data={dataContext}
          decorators={decorators}
        />
        <div className="weather-forecast">
          {
            forecast.map((current, index) => (
              <WeatherForecastComponent
                key={index}
                condition={current}
                temperatureDecorator={decorators.temperatureDecorator}
              />
            ))
          }
        </div>
      </article>
    );
  }

}

LocationInfoComponent.propTypes = {
  locationData: PropTypes.shape({
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
    data: PropTypes.shape({
      query: PropTypes.shape({
        results: PropTypes.shape({
          channel: PropTypes.shape({
            units: PropTypes.object, // eslint-disable-line react/forbid-prop-types
            location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
            wind: PropTypes.object, // eslint-disable-line react/forbid-prop-types
            atmosphere: PropTypes.object, // eslint-disable-line react/forbid-prop-types
            item: PropTypes.shape({
              condition: PropTypes.object, // eslint-disable-line react/forbid-prop-types
              forecast: PropTypes.array // eslint-disable-line react/forbid-prop-types
            })
          })
        })
      })
    })
  })
};

export default LocationInfoComponent;
