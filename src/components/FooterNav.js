import React, { Component } from 'react';

class FooterNav extends Component {
  render() {
    return (
      <footer className="fixed-bottom footer">
        <div className="row">
          <button type="button" class="col-3 btn-lg btn-secondary">
            Home
          </button>
          <button type="button" class="col-3 btn-lg btn-warning">
            Maps
          </button>
          <button type="button" class="col-3 btn-lg btn-danger">
            Connect
          </button>
          <button type="button" class="col-3 btn-lg btn-success">
            Events
          </button>
        </div>
      </footer>
    );
  }
}
export default FooterNav;
