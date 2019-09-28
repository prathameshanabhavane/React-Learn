import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './common/input';
class Login extends Component {

	state = {
		account : {
			username : ' ',
			password : ' '
		},
		errors : {}
	};

	// username = React.createRef();

	// componentDidMount() {
	// 	this.username.current.focus();
	// }

	schema = {
		username: Joi.string().required(),
		password: Joi.string().required()
	};

	validate = () => {

		const result = Joi.validate(this.state.account, this.schema, {
			abortEarly : false
		});
		console.log(result);

		const errors = {};

		const { account } = this.state;
		if(account.username.trim() === '')
			errors.username = 'Username is required.';
		if(account.password.trim() === '')
			errors.password = 'Password is required.';

		return Object.keys(errors).length === 0 ? null : errors;
	}

	handleSubmit = e => {
		e.preventDefault();

		const errors = this.validate();
		// console.log(errors);
		this.setState({ errors : errors || {} });
		if(errors) return;

		// call the server
		console.log('Submitted');
	}

	validateProperty = ({ name, value }) => {
		if (name === 'username') {
			if(value.trim() === '') return "Username is required.";
			// ...
		}
		if (name === 'password') {
			if(value.trim() === '') return "Password is required.";
			// ...
		}
	}

	handleChange = ({ currentTarget: input }) => {
		const  errors = { ...this.state.errors }
		const errorMessage = this.validateProperty(input);
		if(errorMessage) errors[input.name] = errorMessage;
		else delete errors[input.name];


		const account = { ...this.state.account };
		account[input.name] = input.value;
		this.setState({ account, errors });
	}

	render(){
		const { account, errors } = this.state;
		return(
			<div className="row align-item-center">
				<div className="col-12 col-lg-4 mx-auto">
					<form onSubmit={this.handleSubmit}>
					  	<Input 
						  name="username" 
						  value={account.username} 
						  label="Username" 
						  onChange={this.handleChange} 
						  error={errors.username}
						/>
						<Input 
						  name="password" 
						  value={account.password} 
						  label="Password" 
						  onChange={this.handleChange} 
						  error={errors.password}
						/>
					  <button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;