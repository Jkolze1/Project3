import React from 'react';
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import FavoritePlaces from './FavoritePlaces';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PlacesModal from './PlacesModal';

const yelp = require('yelp-fusion');
export default () => {
  return (
    <Router>
      <Container className="formpadding">
        <h2>Get Outside!</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Search for Nearby Parks</Label>
              <Input
                className="form-input"
                placeholder="ex: Kansas City or 64109"
                type="text"
                name="location"
              />
            </FormGroup>
          </Col>
          <Button
            className="btn btn-primary mr-2"
            onClick={this.handleSubmit}
            type="submit"
          >
            Search
          </Button>
          OR
          <Link to="/places/maps">
            <Button
              className="btn btn-primary ml-2"
              onClick={this.renderMap}
              type="submit"
            >
              Top parks in your area
            </Button>
          </Link>
          <Route exact path="/places/maps" component={PlacesModal} />
          <div>
            <Link to="/places/saved">
              <Button className="mt-3">
                <i class="fas fa-heart" />
                See Saved Places
              </Button>
            </Link>
          </div>
        </Form>
        <Route exact path="/places/saved" component={FavoritePlaces} />
      </Container>
    </Router>
  );
};
// Google Maps script
<script
  async
  defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWAEPI5EcGeBUheml4w2W0et_TcCiJVZocallback=initMap"
/>;

// Yelp results

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'sIC9fCJBajA6KYwcedK_sQ';

const searchRequest = {
  term: 'Park',
  location: 'Overland Park, Ks'
};

const client = yelp.client(apiKey);

client
  .search(searchRequest)
  .then(response => {
    const firstResult = response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log(prettyJson);
  })
  .catch(e => {
    console.log(e);
  });
