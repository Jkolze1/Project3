// API Routes
//link
GET https://api.yelp.com/v3/businesses/search

import axios from "axios";

// Export an object containing methods


export default {
    // Function name needs to be defined on search page, i think
  getParks: function() {
    return axios.get("https://api.yelp.com/v3/businesses/parks");
  },
  getLocation: function(breed) {
    return axios.get("https://maps.googleapis.com/maps/api/place/textsearch/xml?query=parks+in+Kansas&key=AIzaSyBWAEPI5EcGeBUheml4w2W0et_TcCiJVZo");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }


};

