import React, { Component } from 'react';
import axios from 'axios';

export default class CoursesList extends Component{

    constructor(props) {
        super(props);

        this.state = {
            courses = []
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

    render() {
        return (
            <div>
                <p>Courses List Component!</p>
            </div>
        )
    }
}