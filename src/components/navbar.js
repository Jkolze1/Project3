import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class Navbar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log('logging out');
    axios
      .post('/user/logout')
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
        }
      })
      .catch(error => {
        console.log('Logout error');
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ');
    console.log(this.props);

    return (
      <nav className="fixed-top">
        {loggedIn ? (
          <div className="row">
            <div className="col-6" />
            <button>
              <Link
                to="#"
                className="btn-lg btn-warning col-3 text-white"
                onClick={this.logout}
              >
                Log Out
              </Link>
            </button>
          </div>
        ) : (
          <div className="row">
            <div className="col-6">
              <span class="align-middle">
                <h5>Welcome, Username!</h5>
              </span>
            </div>
            <Link to="/login" className="col-3 btn-warning btn-sm text-white">
              Sign In
            </Link>
            <Link to="/signup" className="col-3 btn-danger btn-sm text-white">
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    );
  }
}

export default Navbar;
