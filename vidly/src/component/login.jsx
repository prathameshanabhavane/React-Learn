import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import Input from './common/input';

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
		const { data, errors } = this.state;
		return(
			<div className="row align-item-center">
				<div className="col-12 col-lg-4 mx-auto">
					<form onSubmit={this.handleSubmit}>
					  	<Input 
						  name="username" 
						  value={data.username} 
						  label="Username" 
						  onChange={this.handleChange} 
						  error={errors.username}
						/>
						<Input 
						  name="password" 
						  value={data.password} 
						  label="Password" 
						  onChange={this.handleChange} 
						  error={errors.password}
						/>
					  <button type="submit" disabled={this.validate()} className="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;