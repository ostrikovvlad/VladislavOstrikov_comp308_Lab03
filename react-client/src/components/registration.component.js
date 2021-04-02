import React, { Component } from 'react';
import axios from 'axios';

export default class RegisterStudent extends Component{

    constructor(props) {
        super(props);

        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);

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

    render() {
        return (
            <div>
                <h3>Sign Up!</h3>

                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 

                <label>Password: </label>
                <input type="password"
                    required
                    className="form-control"
                    min = "6"
                    value = {this.state.password}
                    onChange = {this.onChangePassword}
                />

                <label>Phone Number: </label>
                <input type="tel"
                    className="form-control"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    value = {this.state.phoneNumber}
                    onChange = {this.onChangePhoneNumber}
                />

                
                </div>
                </form>
            </div>

          
        )
    }
}