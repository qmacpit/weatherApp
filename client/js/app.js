import React, { Component } from 'react';
import { connect } from 'react-redux';

import LocationSelectorComponent from './components/locationSelectorComponent';
import LocationInfoComponent from './components/locationInfoComponent';
import AppToggleButton from './components/widgets/appToggleButton';
import { fetchLocationData } from './middleware/locationDataActions';

const locations = [
  'Nome, AK',
  'New York',
  'Chicago',
  'San Francisco',
  'New Orleans',
  'Detroit'
];

/* dirty hack to disaable body scrolling when city list is on */
const offBodyScroll = () => {
  document.body.style.overflow = 'hidden';
};
const onBodyScroll = () => {
  document.body.style.overflow = 'auto';
};

class App extends Component {

  constructor(props) {
    super(props);
    this.appToggleButtonClicked = this.appToggleButtonClicked.bind(this);
    this.bindLocationSelectorOpen = this.bindLocationSelectorOpen.bind(this);
    this.fetchLocationData = this.fetchLocationData.bind(this);
  }

  appToggleButtonClicked() {
    offBodyScroll();
    this.openLocationSelector();
  }

  bindLocationSelectorOpen(open) {
    this.openLocationSelector = open;
  }

  fetchLocationData(query) {
    onBodyScroll();
    this.props.dispatch(fetchLocationData(query));
  }

  render() {
    return (
      <div>
        <LocationSelectorComponent
          locations={locations}
          assignOpen={this.bindLocationSelectorOpen}
          onSubmit={this.fetchLocationData}
        />
        <LocationInfoComponent {...this.props} />
        <AppToggleButton onClick={this.appToggleButtonClicked} />
      </div>
    );
  }

}

const mapStateToProps = state => ({
  locationData: state.locationData
});

export default connect(mapStateToProps)(App);
