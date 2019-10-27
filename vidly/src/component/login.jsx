import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class Login extends Form {

	state = {
		data : {
			username : '',
			password : ''
		},
		errors : {}
	};

	// username = React.createRef();

	// componentDidMount() {
	// 	this.username.current.focus();
	// }

	schema = {
		username: Joi.string().required().label('Username'),
		password: Joi.string().required().label('Password')
	};


    doSubmit = () => {
		// call the server
		console.log('Submitted');
	}

	render(){
		return(
			<div className="row align-item-center">
				<div className="col-12 col-lg-4 mx-auto">
					<h1>Login</h1>
					<form onSubmit={this.handleSubmit}>
					  	{this.renderInput('username', 'Username')}
					  	{this.renderInput('password', 'Password', 'password')}
					  {this.renderButton("Login")}
					</form>
				</div>
			</div>
		);
	}
}

export default Login;