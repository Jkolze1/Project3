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
import FavoriteMeetup from './FavoriteMeetup';
import MeetUpModal from './MeetUpModal';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default () => {
  return (
    <Router>
      <Container className="formpadding">
        <h2>Find Fitness Friends!</h2>
        <h5>Search for Meetup Groups in your area</h5>
        <Link to="/meetup/results">
          <Button className="btn btn-primary mt-2 ml-2" type="submit">
            Go!
          </Button>
        </Link>

        <div>
          <Link to="/meetup/saved">
            <Button className="mt-3 ml-2">
              <i class="fas fa-heart" />
              See Saved Groups
            </Button>
          </Link>
        </div>
        <Route exact path="/meetup/results" component={MeetUpModal} />
        <Route exact path="/meetup/saved" component={FavoriteMeetup} />
      </Container>
    </Router>
  );
};
