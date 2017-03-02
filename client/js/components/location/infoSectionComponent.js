import React, { PropTypes } from 'react';

import Icon from '../widgets/icon';
import KeyValueDisplayWidget from '../widgets/keyValueDisplayWidget';

const InfoSectionComponent = ({ title, icon, data, decorators, filter }) => (
  <section>
    <p>
      <Icon icon={icon} />
      {title}
    </p>
    <KeyValueDisplayWidget data={data} decorators={decorators} filter={filter} />
  </section>
);

/* eslint-disable react/forbid-prop-types, react/require-default-props */
InfoSectionComponent.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  filter: PropTypes.arrayOf(PropTypes.string),
  decorators: PropTypes.shape({
    presureDecorator: PropTypes.func,
    speedDecorator: PropTypes.func,
    temperatureDecorator: PropTypes.func,
    distanceDecorator: PropTypes.func
  })
};

export default InfoSectionComponent;
