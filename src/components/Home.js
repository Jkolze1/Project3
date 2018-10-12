import React, { Component } from 'react';
import FooterNav from './FooterNav';
import girlrunning from '../girlrunning.png';

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    const imageStyle = {
      width: 400
    };
    return (
      <div>
        <p>It's good to be H ome</p>
        <div>
          <img src={girlrunning} width="100%" />
        </div>

        <FooterNav />
      </div>
    );
  }
}

export default Home;
