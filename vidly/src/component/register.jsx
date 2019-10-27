import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class Register extends Form {
    state = { 
        data : {
			username : '',
            password : '',
            name: ''
		},
		errors : {}
    }
    
    schema = {
		username: Joi.string().required().email().label('Username'),
        password: Joi.string().min(5).max(6).required().label('Password'),
        name: Joi.string().required().label('Name')
	};


    doSubmit = () => {
		// call the server
		console.log('Submitted');
	}

    render() { 
        return ( 
            <div className="row align-item-center">
				<div className="col-12 col-lg-4 mx-auto">
                    <h1>Register</h1>
					<form onSubmit={this.handleSubmit}>
					  	{this.renderInput('username', 'Username')}
                        {this.renderInput('password', 'Password', 'password')}
                        {this.renderInput('name', 'Name')}
					  {this.renderButton("Register")}
					</form>
				</div>
			</div>
        );
    }
}
 
export default Register;