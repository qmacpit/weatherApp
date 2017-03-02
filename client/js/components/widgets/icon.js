import React, { PropTypes } from 'react';
import classnames from 'classnames';

const getIconClasses = icon => classnames({
  wi: true,
  [icon]: true
});

const Icon = ({ icon }) => (
  <i className={getIconClasses(icon)} />
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired
};

export default Icon;
