import React, { Component } from 'react';

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
        <img
          style={imageStyle}
          src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg"
          alt="the shire"
        />
      </div>
    );
  }
}

export default Home;
