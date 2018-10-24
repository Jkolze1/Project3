import React, { Component } from 'react';
import Map from './Map.js'

class Places extends Component {
  render() {
    return (
      <div className="Places">
        <header className="App-header">
          <h1 className="App-title">Places</h1>
        </header>
        <Map/>
      </div>
    );
  }
}

export default Places;