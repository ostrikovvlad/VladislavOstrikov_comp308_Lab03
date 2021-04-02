import React, { Component } from 'react';

export default class CreateCourse extends Component{

    constructor(props) {
        super(props);

        this.onChangeCourseCode = this.onChangeCourseCode.bind(this);
        this.onChangeCourseName = this.onChangeCourseName.bind(this);
        this.onChangeSection = this.onChangeSection.bind(this);
        this.onChangeSemester = this.onChangeSemester.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            courseCode: '',
            courseName: '',
            section: '',
            semester: '',
            semesterOptions: [],
            sections: []
        }
    }

    componentDidMount() {
        this.setState( {
            semesterOptions: ['W2021', 'S2021', 'F2021'],
            semester: 'W2021',
            sections: ['001', '002', '003', '005', '006', '007'],
            section: '001'
        })
    }

    onChangeCourseCode(e) {
        this.setState({
            courseCode: e.target.value
        });
    }
    onChangeCourseName(e) {
        this.setState({
            courseName: e.target.value
        });
    }
    onChangeSection(e) {
        this.setState({
            section: e.target.value
        });
    }
    onChangeSemester(e) {
        this.setState({
            semester: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const course = {
            courseCode : this.state.courseCode,
            courseName: this.state.courseName,
            section: this.state.section,
            semester: this.state.semester
        }

        console.log(course);

        window.location = '/';
    }

    render() {
        return (
            <div>
      <h3>Add New Course</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Course Code: </label>
          <input type="text"
            required
            className="form-control"
            min = "6"
            max = "8"
            value = {this.state.courseCode}
            onChange = {this.onChangeCourseCode}
          />
        </div>
        <div className="form-group"> 
          <label>Course Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.courseName}
              onChange={this.onChangeCourseName}
              />
        </div>
        <div className="form-group">
          <label>Section: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.section}
              onChange={this.onChangeSection}>
              {
                this.state.sections.map(function(section) {
                  return <option 
                    key={section}
                    value={section}>{section}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group">
          <label>Semester: </label>
          <div>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.semester}
              onChange={this.onChangeSemester}>
              {
                this.state.semesterOptions.map(function(semester) {
                  return <option 
                    key={semester}
                    value={semester}>{semester}
                    </option>;
                })
              }
          </select>
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Course" className="btn btn-primary" />
        </div>
      </form>
    </div>
        )
    }
}