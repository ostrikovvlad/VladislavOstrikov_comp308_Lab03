import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component{
    constructor(props){
        super(props);

        this.onChangeStudentNumber = this.onChangeStudentNumber.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            studentNumber: '',
            password: ''
        }
    }

    onChangeStudentNumber(e){
        this.setState({
            studentNumber: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.password
        });
    }

    onSubmit(e){
        e.preventDefault();
        const student = {
            studentNumber: this.state.studentNumber,
            password: this.state.password
        }

        console.log(student);

        axios
            .get("http://localhost:5000/login", { withCredentials: true })
            .then(console.log)
            .catch(console.error);
        window.location = '/';
    }

    render(){
        return(
            <div className="container">
                <h3>Login</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>Student Number: </label>
                    <input type="number"
                    required 
                    className="form-control"
                    value={this.state.studentNumber}
                    onChange = {this.onChangeStudentNumber}
                    />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password"
                        required
                        className="form-control"
                        value = {this.state.password}
                        onChange = {this.onChangePassword}
                        />
                    </div>
                    <div className="form-group">
                    <input type="submit" value="Sign In" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}