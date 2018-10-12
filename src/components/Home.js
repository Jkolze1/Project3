import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FavoriteEvents from './FavoriteEvents';
import FavoriteMeetUp from './FavoriteMeetup';
import FavoritePlaces from './FavoritePlaces';

//import FooterNav from './FooterNav';
//import girlrunning from '../girlrunning.png';
import '../App.css';
//<img src={girlrunning} id="girlrunning" width="100%" />
class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Container>
          <Link to="/places/saved">
            <Button>
              <i class="fas fa-heart" />
              See Saved Places
            </Button>
          </Link>

          <Link to="/meetup/saved">
            <Button>
              <i class="fas fa-heart" />
              See Saved Groups
            </Button>
          </Link>

          <Link to="/events/saved">
            <Button>
              <i class="fas fa-heart" />
              See Saved Events
            </Button>
          </Link>
          <Route exact path="/events/saved" component={FavoriteEvents} />
          <Route exact path="/places/saved" component={FavoritePlaces} />
          <Route exact path="/meetup/saved" component={FavoriteMeetUp} />
        </Container>
      </Router>
    );
  }
}

export default Home;
