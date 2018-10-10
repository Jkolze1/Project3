import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      confirmPassword: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    console.log('sign-up handleSubmit, username: ');
    console.log(this.state.username);
    event.preventDefault();

    //request to server to add a new username/password
    axios
      .post('/user/', {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log('successful signup');
          this.setState({
            //redirect to login page
            redirectTo: '/login'
          });
        } else {
          console.log('username already taken');
        }
      })
      .catch(error => {
        console.log('signup error: ');
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="container">
          <div className="card card-body SignupForm">
            <div className="card-header text-left">
              <h3>Sign up</h3>
              <form className="form-horizontal">
                <div className="form-group">
                  <div>
                    <label className="form-label" htmlFor="username">
                      username:
                    </label>
                  </div>
                  <div>
                    <input
                      className="form-input"
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div>
                    <label className="form-label" htmlFor="password">
                      Password:{' '}
                    </label>
                  </div>
                  <div>
                    <input
                      className="form-input"
                      placeholder="password"
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group ">
                  <div />
                  <button
                    className="btn btn-primary"
                    onClick={this.handleSubmit}
                    type="submit"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Signup;
