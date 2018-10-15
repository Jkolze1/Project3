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
import FavoriteEvents from './FavoriteEvents';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default () => {
  return (
    <Router>
      <Container className="formpadding">
        <h2>Find Fitness Events!</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Search for events</Label>
              <Input
                className="form-input"
                type="text"
                id="eventsearch"
                name="eventsearch"
                placeholder="i.e... 5K, triathalon"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Location</Label>
              <Input
                className="form-input"
                placeholder="ex: Kansas City or 64109"
                type="text"
                name="location"
              />
            </FormGroup>
          </Col>
          <Button
            className="btn btn-primary"
            onClick={this.handleSubmit}
            type="submit"
          >
            Search
          </Button>
        </Form>
        <div>
          <Link to="/events/saved">
            <Button className="mt-3">
              <i class="fas fa-heart" />
              See Saved Events
            </Button>
          </Link>
        </div>
        <Route exact path="/events/saved" component={FavoriteEvents} />
      </Container>
    </Router>
  );
};
