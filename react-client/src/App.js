import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";

import CoursesList from "./components/courses-list.component";
import StudentsList from "./components/students-list.component";
import EditCourse from "./components/edit-courses.component";
import CreateCourse from "./components/create-course.component";
import RegisterStudent from "./components/registration.component";
import Login from "./components/login.component"

function App() {
  return (
    <Router>
    <div className="container">
    <Navbar />
    <br />
    <Route path="/" exact component = {CoursesList} />
    <Route path="/edit/:id" component = {EditCourse} />
    <Route path="/studentsList" component = {StudentsList} />
    <Route path="/create" component = {CreateCourse} />
    <Route path="/registration" component = {RegisterStudent} />
    <Route path="/login" component = {Login} />
    </div>
    </Router>
  );
}

export default App;
