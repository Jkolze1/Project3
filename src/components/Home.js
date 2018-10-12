import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
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
      <Container>
        <Button>
          <i class="fas fa-heart" />
          See Saved Events
        </Button>
        <Button>
          <i class="fas fa-heart" />
          See Saved Places
        </Button>
        <Button>
          <i class="fas fa-heart" />
          See Saved Groups
        </Button>
      </Container>
    );
  }
}

export default Home;
