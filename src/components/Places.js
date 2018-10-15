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
const yelp = require('yelp-fusion');
export default () => {
  return (
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
        <Button
          className="btn btn-primary ml-2"
          onClick={this.handleSubmit}
          type="submit"
        >
          Top parks in your area
        </Button>
        <div>
          <Button className="mt-3">
            <i class="fas fa-heart" />
            See Saved Places
          </Button>
        </div>
      </Form>
    </Container>
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
