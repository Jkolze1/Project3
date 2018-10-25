import React from 'react';
import { Container, Button } from 'reactstrap';

import { Link } from 'react-router-dom';
import FavoriteEvents from './FavoriteEvents';
import EventsModal from './EventsModal';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default () => {
  return (
    <Router>
      <Container className="formpadding">
        <h2>Find Fitness Events!</h2>
        <h5>Search for events in your area</h5>
        <Link to="/events/results">
          <Button className="btn btn-primary mt-2 ml-2" type="submit">
            Go!
          </Button>
        </Link>

        <div>
          <Link to="/events/saved">
            <Button className="mt-3 ml-2">
              <i class="fas fa-heart" />
              See Saved Events
            </Button>
          </Link>
        </div>
        <Route exact path="/events/results" component={EventsModal} />
        <Route exact path="/events/saved" component={FavoriteEvents} />
      </Container>
    </Router>
  );
};
