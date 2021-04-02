import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Students = props => (
    <tr>
      <td>{props.student.studentNumber}</td>
      <td>{props.student.firstName}</td>
      <td>{props.student.lastName}</td>
      <td>{props.student.email}</td>
      <td>{props.student.program}</td>
      <td>
        <Link to={"/edit/"+props.student._id}>edit</Link> | <a href="#" onClick={() => { props.deleteStudent(props.student._id) }}>delete</a>
      </td>
    </tr>
  )

  export default class StudentsList extends Component{

    constructor(props) {
        super(props);

        this.state = {
            students: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/students/studentsList/')
            .then(response => {
                this.setState({
                    students: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteStudent(id) {
        axios.delete('http://localhost:5000/studentsList/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          students: this.state.students.filter(el => el._id !== id)
        })
      }

    studentsList() {
        return this.state.students.map(currentstudent => {
          return <Students student={currentstudent} deleteStudent={this.deleteStudent} key={currentstudent._id}/>;
        })
      }

    render() {
        return (
            <div>
                <p>Students List Component!</p>
                <h3>Student List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Student Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Program</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.studentsList() }
          </tbody>
        </table>
            </div>
            
        )
    }
}