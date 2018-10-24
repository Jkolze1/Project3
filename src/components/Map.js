import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 38.9822, lng: 94.6708 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `300px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      
      </div>
   );
   }
};
export default Map;