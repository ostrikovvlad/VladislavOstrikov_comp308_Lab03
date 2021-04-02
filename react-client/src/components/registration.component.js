import React, { Component } from 'react';
import axios from 'axios';

export default class RegisterStudent extends Component{

    constructor(props) {
        super(props);

        this.onChangeStudentNumber = this.onChangeStudentNumber.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeProgram = this.onChangeProgram.bind(this);

        this.state = {
            studentNumber: 0,
            password: '',
            email: '',
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            phoneNumber: '',
            program: ''
        }
    }

    onChangeStudentNumber(e){
        this.setState({
            studentNumber: e.target.value
        });
    }

    

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }

    onChangeFirstName(e){
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeLastName(e){
        this.setState({
            lastName: e.target.value
        });
    }

    onChangeAddress(e){
        this.setState({
            address: e.target.value
        });
    }

    onChangeCity(e){
        this.setState({
            city: e.target.value
        });
    }

    onChangeProgram(e){
        this.setState({
            program: e.target.value
        });
    }

    onChangePhoneNumber(e) {
        let num = e.target.value.replace(/\D/g, '');
        e.target.value = '(' + num.substring(0, 3) + ')' + ' ' + 
            num.substring(3, 6) + '-' + num.substring(6, 10); 
        this.setState({
            phoneNumber: e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const student = {
            studentNumber: this.state.studentNumber,
            password: this.state.password,
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            city: this.state.city,
            phoneNumber: this.state.phoneNumber,
            program: this.state.program
        }

        console.log(student);

        axios.prototype('http://localhost:500/students/add', student)
            .then(res => console.log(res.data));

            window.location = '/';

    }

    render() {
        return (
            <div>
                <h3>Sign Up!</h3>

                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 

                <div>
                <label>Student Number: </label>
                <input type="number"
                    required
                    className = "form-control"
                    min = "9"
                    max = "9"
                    value = {this.state.studentNumber}
                    onChange = {this.onChangeStudentNumber}
                />
                </div>

                <div>
                <label>Password: </label>
                <input type="password"
                    required
                    className="form-control"
                    min = "6"
                    value = {this.state.password}
                    onChange = {this.onChangePassword}
                />
                </div>

                <div>
                <label>Email: </label>
                <input type="email"
                    required
                    pattern = "/.+\@.+\..+/"
                    className = "form-control"
                    value = {this.state.email}
                    onChange = {this.onChangeEmail}
                />
                </div>

                <div>
                <label>First Name: </label>
                <input type="text"
                    required
                    className = "form-control"
                    value = {this.state.firstName}
                    onChange = {this.onChangeFirstName}
                />
                </div>

                <div>
                <label>Last Name: </label>
                <input type="text"
                    required
                    className = "form-control"
                    value = {this.state.lastName}
                    onChange = {this.onChangeLastName}
                />
                </div>

                <div>
                <label>Address: </label>
                <input type="text"
                    required
                    className = "form-control"
                    value = {this.state.address}
                    onChange = {this.onChangeAddress}
                />
                </div>

                <div>
                <label>City: </label>
                <input type="text"
                    required
                    className = "form-control"
                    value = {this.state.city}
                    onChange = {this.onChangeCity}
                /> 
                </div>     

                <div>
                <label>Phone Number: </label>
                <input type="tel"
                    className="form-control"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    value = {this.state.phoneNumber}
                    onChange = {this.onChangePhoneNumber}
                />
                </div>
                
                <div>
                <label>Program: </label>
                <input type="text"
                    required
                    className = "form-control"
                    value = {this.state.program}
                    onChange = {this.onChangeProgram}
                />
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