import React from 'react';

const Input = ({ name, label, value, error, onChange }) => {
    return ( 
    	<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<input 
				value={value} 
				onChange={onChange} 
				name={name}
				autoFocus 
				// ref={this.username} 
				type="text" 
				className="form-control" 
				id={name}
				// placeholder="Enter email" 
				/>
				{ error && <div className="alert alert-danger mt-2" role="alert">{error}</div> }
		</div>
		
    );
}
 
export default Input;