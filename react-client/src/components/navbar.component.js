import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Forever Together</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Courses</Link>
          </li>
          <li className="navbar-item">
          <Link to="/studentsList" className="nav-link">Students</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Course</Link>
          </li>
          <li className="navbar-item">
          <Link to="/registration" className="nav-link">Register</Link>
          </li>
          <li className="navbar-item">
          <Link to="/login" className="nav-link">Sign In</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}