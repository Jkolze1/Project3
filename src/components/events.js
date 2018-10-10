import React, { Component } from 'react';

class Events extends Component {
  state = {
    event: '',
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
    const { event, location } = this.state;
    return (
      <div className="card mb-3">
        <div className="className card-header">Find Events</div>
        <div className="div className card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="event">Event</label>
              <input
                type="text"
                name="event"
                className="form-control form-control-lg"
                placeholder="Search events by interest... i.e. 5K or Triathalon"
                value={event}
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
              value="Search for Events"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Events;
