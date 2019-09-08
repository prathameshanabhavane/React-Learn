import React, { Component } from 'react';

class Login extends Component {

	state = {
		account : {
			username : ' ',
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

	handleChange = e => {
		const account = { ...this.state.account };
		account.username = e.currentTarget.value;
		this.setState({ account });
	}

	render(){
		return(
			<div className="row align-item-center">
				<div className="col-12 col-lg-4 mx-auto">
					<form onSubmit={this.handleSubmit}>
					  <div className="form-group">
						<label htmlFor="username">Username</label>
						<input value={this.state.account.username} onChange={this.handleChange} autoFocus ref={this.username} type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter email" />
					  </div>
					  <div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" className="form-control" id="password" placeholder="Password" />
					  </div>
					  <button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;