import React, { Component } from 'react';
const yelp = require('yelp-fusion');

class Places extends Component {
  render() {
    return <div />;
  }
}
// Google Maps script
<script async defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWAEPI5EcGeBUheml4w2W0et_TcCiJVZocallback=initMap">
</script>

// Yelp results

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = "sIC9fCJBajA6KYwcedK_sQ"

const searchRequest = {
  term:'Park',
  location: 'Overland Park, Ks'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});

export default Places;
