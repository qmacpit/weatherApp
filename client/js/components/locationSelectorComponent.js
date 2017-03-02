import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import Icon from './widgets/icon';

class LocationSelectorComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: -1,
      isOpen: false
    };
    this.props.assignOpen(this.open.bind(this));
    this.bindOnItemSelected = this.bindOnItemSelected.bind(this);
    this.submit = this.submit.bind(this);
  }

  getClasses() {
    return classnames({
      open: this.state.isOpen
    });
  }

  getItemClasses(index) {
    const { selectedIndex } = this.state;
    return classnames({
      selected: selectedIndex === index
    });
  }

  bindOnItemSelected(selectedIndex) {
    return () => {
      this.setState({ selectedIndex });
    };
  }

  open() {
    this.setState({
      isOpen: true
    });
  }

  close() {
    this.setState({
      isOpen: false
    });
  }

  submit() {
    this.close();
    const { locations, onSubmit } = this.props;
    const selectedLocation = locations[this.state.selectedIndex];
    if (onSubmit && selectedLocation) {
      onSubmit(selectedLocation);
    }
  }

  render() {
    const { locations } = this.props;
    return (
      <nav className={this.getClasses()}>
        <h5>Pick a city</h5>
        <ul>
          {
            locations.map((current, index) => (
              <li
                key={index}
                onClick={this.bindOnItemSelected(index)}
                className={this.getItemClasses(index)}
              >
                {current}
              </li>
            ))
          }
        </ul>
        <a className="button" onClick={this.submit} >
          Fetch
          <Icon icon="wi-cloud-down" />
        </a>
      </nav>
    );
  }

}

LocationSelectorComponent.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSubmit: PropTypes.func.isRequired,
  assignOpen: PropTypes.func.isRequired
};

export default LocationSelectorComponent;
