import React, { PropTypes } from 'react';

import InfoSectionComponent from './infoSectionComponent';
import WeatherStateComponent from '../weather/weatherStateComponent';
import { percentDecorator } from '../toolbox/decorators';

const buildInfoSectionComponent = (title, icon, filter) => (data, decorators) => (
  <InfoSectionComponent
    title={title}
    icon={icon}
    data={data}
    decorators={decorators}
    filter={filter}
  />
  );

const COORDINATES_FILTER = [
  'lat', 'long'
];

/**
 * DECORATORS
 */

const STATIC_DECORATORS = {
  ATMOSPHERE: {
    humidity: percentDecorator
  }
};

const windDecorator = ({ speedDecorator }) => ({
  speed: speedDecorator
});

const atmosphereDecorator = ({ presureDecorator, distanceDecorator }) => ({
  ...STATIC_DECORATORS.ATMOSPHERE,
  pressure: presureDecorator,
  visibility: distanceDecorator
});

/**
 * SECTION COMPONENTS
 */
const windInfoSectionComponent = buildInfoSectionComponent('Wind', 'wi-strong-wind');
const atmosphereInfoSectionComponent = buildInfoSectionComponent('Atmosphere', 'wi-barometer');
const astronomyInfoSectionComponent = buildInfoSectionComponent('Astronomy', 'wi-time-12');
const coordinatesInfoSectionComponent =
  buildInfoSectionComponent('Coordinates', 'wi-small-craft-advisory', COORDINATES_FILTER);

const LocationDetailsComponent = (props) => {

  const { data, decorators } = props;
  const { location, item } = data;
  const { condition } = item;

  return (
    <div className="locationDetails">
      <h5>{location.city}, {location.region} {location.country}</h5>
      <WeatherStateComponent
        condition={condition}
        temperatureDecorator={decorators.temperatureDecorator}
      />
      { windInfoSectionComponent(data.wind, windDecorator(decorators)) }
      { atmosphereInfoSectionComponent(data.atmosphere, atmosphereDecorator(decorators)) }
      { astronomyInfoSectionComponent(data.astronomy) }
      { coordinatesInfoSectionComponent(item) }
    </div>
  );

};

LocationDetailsComponent.propTypes = {
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
  }),
  decorators: PropTypes.shape({
    presureDecorator: PropTypes.func,
    speedDecorator: PropTypes.func,
    temperatureDecorator: PropTypes.func,
    distanceDecorator: PropTypes.func
  }).isRequired
};

export default LocationDetailsComponent;
