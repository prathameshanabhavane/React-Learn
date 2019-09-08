import React, { Component } from 'react';

class Login extends Component {

	handleSubmit = e => {
		e.preventDefault();

		console.log('Submitted');
	}

	render(){
		return(
			<div className="row align-item-center">
				<div className="col-12 col-lg-4 mx-auto">
					<form onSubmit={this.handleSubmit}>
					  <div className="form-group">
						<label htmlFor="username">Username</label>
						<input type="email" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter email" />
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