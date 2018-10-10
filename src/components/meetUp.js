import React, { Component } from 'react';

class Meetup extends Component {
  state = {
    group: '',
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
    const { group, location } = this.state;
    return (
      <div className="card mb-3">
        <div className="className card-header">Find your pack</div>
        <div className="div className card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="meetup">Meetup</label>
              <input
                type="text"
                name="event"
                className="form-control form-control-lg"
                placeholder="Search groups by interest... i.e. running, walking"
                value={group}
                onChange={this.onChange}
              />
            </div>
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
              value="Find Meetup Group!"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Meetup;
