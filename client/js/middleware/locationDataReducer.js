const { LOCATION_DATA_LOADING, LOCATION_DATA_SUCCESS, LOCATION_DATA_ERROR } = require('./locationDataActions').ACTIONS;

const getStateProto = (data, isLoading = false, isError = false) => ({
  data, isLoading, isError
});

const locationData = (state = {}, action) => {

  switch (action.type) {

    case LOCATION_DATA_LOADING:
      return getStateProto({}, true);

    case LOCATION_DATA_ERROR:
      return getStateProto({}, false, true);

    case LOCATION_DATA_SUCCESS:
      return getStateProto(action.payload);

    default:
      return state;
  }

};

export default locationData;
