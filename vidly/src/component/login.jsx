import React, { Component } from 'react';

class Login extends Component {

	state = {
		account : {
			// username : null;
			// username : ' ',
			password : ' '
		}
	}

	username = React.createRef();

	// componentDidMount() {
	// 	this.username.current.focus();
	// }

	handleSubmit = e => {
		e.preventDefault();

		// call the server
		const username = this.username.current.value;
		console.log('Submitted');
	}

	handleChange = ({ currentTarget: input }) => {
		const account = { ...this.state.account };
		account[input.name] = input.value;
		this.setState({ account });
	}

	render(){
		const { account } = this.state;
		return(
			<div className="row align-item-center">
				<div className="col-12 col-lg-4 mx-auto">
					<form onSubmit={this.handleSubmit}>
					  <div className="form-group">
						<label htmlFor="username">Username</label>
						<input value={account.username} onChange={this.handleChange} name="username" autoFocus ref={this.username} type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter email" />
					  </div>
					  <div className="form-group">
						<label htmlFor="password">Password</label>
						<input value={account.password} onChange={this.handleChange} name="password" type="password" className="form-control" id="password" placeholder="Password" />
					  </div>
					  <button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;