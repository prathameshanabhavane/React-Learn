import React, { Component } from 'react';

class Login extends Component {
	render(){
		return(
			<div class="row align-item-center">
				<div class="col-12 col-lg-4 mx-auto">
					<form>
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