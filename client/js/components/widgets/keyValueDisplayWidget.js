import React, { PropTypes } from 'react';


const KeyValueDisplayWidget = ({ data, decorators, filter }) => {

  const keys = filter
  ? Object.keys(data).filter(current => filter.indexOf(current) !== -1)
  : Object.keys(data);

  return (
    <div className="key-value-widget">
      {
        keys.map((key, index) => (
          <div key={index}>
            <span>{key}</span>
            <span>
              {
                decorators && decorators[key]
                ? decorators[key](data[key])
                : data[key]
              }
            </span>
          </div>
          ))
      }
    </div>
  );
};

/* eslint-disable react/forbid-prop-types, react/require-default-props */
KeyValueDisplayWidget.propTypes = {
  data: PropTypes.object.isRequired,
  decorators: PropTypes.object,
  filter: PropTypes.arrayOf(PropTypes.string)
};

export default KeyValueDisplayWidget;
