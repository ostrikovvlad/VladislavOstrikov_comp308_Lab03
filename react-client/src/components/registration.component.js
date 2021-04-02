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

    onChangePhoneNumber(e) {
        let num = e.target.value.replace(/\D/g, '');
        e.target.value = '(' + num.substring(0, 3) + ')' + ' ' + 
            num.substring(3, 6) + '-' + num.substring(6, 10); 
        this.setState({
            phoneNumber: e.target.value
        });
    }

    render() {
        return (
            <div>
                <p>Registration Component!</p>

                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
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