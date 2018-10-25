import React, { Component } from 'react';
import Map from './Map.js';

class Places extends Component {
  render() {
    return (
      <center>
        <iframe
          title="gMap"
          name="gMap"
          width="600"
          height="450"
          src={`https://www.google.com/maps/embed/v1/search?q=parks%20near%20Overland%20Park%2C%20KS%2C%20USA&key=AIzaSyCa7GHUwBpHjfw6vohPbYh_WVr9erCd0YU`}
        />
      </center>
    );
  }
}

export default Places;
