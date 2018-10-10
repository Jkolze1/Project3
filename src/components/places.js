import React, { Component } from 'react';

class Places extends Component {
  state = {
    location: ''
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    const { location } = this.state;
    return (
      <div className="card mb-3">
        <div className="className card-header">Get Outside!</div>
        <div className="div className card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                name="location"
                className="form-control form-control-lg"
                placeholder="Enter Location..."
                value={location}
                onChange={this.onChange}
              />
            </div>
            <input
              type="submit"
              value="Find Nearby Parks!"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Places;
