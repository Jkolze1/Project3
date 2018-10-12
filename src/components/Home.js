import React, { Component } from 'react';
import FooterNav from './FooterNav';
import girlrunning from '../girlrunning.png';
import '../App.css';

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>
          <img src={girlrunning} id="girlrunning" width="100%" />
        </div>
      </div>
    );
  }
}

export default Home;
