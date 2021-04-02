import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Courses = props => (
    <tr>
      <td>{props.course.courseCode}</td>
      <td>{props.course.courseName}</td>
      <td>{props.course.section}</td>
      <td>{props.course.semester}</td>
      <td>
        <Link to={"/edit/"+props.course._id}>edit</Link> | <a href="#" onClick={() => { props.deleteCourse(props.course._id) }}>delete</a>
      </td>
    </tr>
  )

export default class CoursesList extends Component{

    constructor(props) {
        super(props);

        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/courses/')
            .then(response => {
                this.setState({
                    courses: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteCourse(id) {
        axios.delete('http://localhost:5000/courses/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          courses: this.state.courses.filter(el => el._id !== id)
        })
      }

    coursesList() {
        return this.state.courses.map(currentcourse => {
          return <Courses course={currentcourse} deleteCourse={this.deleteCourse} key={currentcourse._id}/>;
        })
      }

    render() {
        return (
            <div>
                <p>Courses List Component!</p>
                <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Section</th>
              <th>Semester</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.coursesList() }
          </tbody>
        </table>
            </div>
            
        )
    }
}