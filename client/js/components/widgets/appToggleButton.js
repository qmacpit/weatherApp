import React, { PropTypes } from 'react';

import Icon from './icon';

const AppToggleButton = ({ onClick }) => (
  <div className="app-toggle-button" onClick={onClick}>
    <Icon icon="wi-direction-left" />
  </div>
  );

AppToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default AppToggleButton;
